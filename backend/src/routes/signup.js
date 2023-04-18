//SJSU CMPE 138 Spring 2022 TEAM2
const express = require('express');
let db = require('../dbConnection');
const { signupValidation } = require('../validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const log4js = require('log4js');
const logger = log4js.getLogger();

const router = express.Router({ mergeParams: true })

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

router.post('/user', (req, res) => {
    /* 
    for type = student --> fname,lname,email, password,dob,col_id
    for type = clo  --> name, password, col_id
    for type = provider --> name , password
    */
    const { type } = req.query;

    if (!type) {
        logger.error("API Error: Bad Request")
        return res.status(400).send({
            msg: 'Type is required'
        });
    }

    let existsQuery, insertQuery;

    if (type === 'seeker' || type == 'ambassdor') {
        existsQuery = `SELECT * FROM student WHERE LOWER(email) = LOWER('${req.body.email}');`
        const is_ambassdor = type == 'ambassdor' ? 1 : 0;
        const dob = new Date(req.body.dob)
        let formatted_dob = dob.getFullYear() + "-" + (dob.getMonth() + 1) + "-" + dob.getDate();
        let age;
        if (dob)
            age = getAge(req.body.dob)
        insertQuery = (hash) => `insert into student(first_name,last_name,email,password, col_id, dob, age, is_ambassdor) values('${req.body.fname}', '${req.body.lname}', '${req.body.email}', '${hash}', '${req.body.col_id}', '${formatted_dob}','${age}', '${is_ambassdor}');`
    }
    else if (type === 'clo') {
        existsQuery = `SELECT * FROM clo WHERE name = '${req.body.name}';`;
        insertQuery = (hash) => `insert into clo(name,password,col_id) values('${req.body.name}', '${hash}', '${req.body.col_id}');`

    }
    else if (type === 'provider') {
        existsQuery = `SELECT * FROM provider WHERE name = '${req.body.name}';`;
        insertQuery = (hash) => `insert into provider(name,password) values('${req.body.name}', '${hash}');`

    }


    db.pool.getConnection((err, connection) => {
        if (err) {
            logger.error(err);
            return res.sendStatus(500);
        };
        
        if (type == 'clo' || type == 'student'){
            connection.query(`SELECT * FROM college WHERE col_id=${req.body.col_id};`, (err, rows) => {
                if (err) {
                    logger.error(err);
                    return res.sendStatus(500);
                };
                if (!rows.length) {
                    logger.info("Wrong college ID provided")
                    return res.status(409).send({
                        msg: 'Wrong College ID'
                    });
                }
            });
        }
            

        connection.query(
            existsQuery,
            (err, rows) => {
                if (err) {
                    logger.error(err);
                    return res.status(500).send({ error: "Server error" });
                };
                if (rows && rows.length) {
                    logger.info("Email has already been registered.")
                    return res.status(409).send({
                        msg: 'This email has already been registered.'
                    });
                }
                else {
                    //email is available
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            logger.error(err);
                            return res.status(500).send({ error: "Server error" });
                        }
                        else {
                            console.log(insertQuery(hash))
                            // has hashed pw => add to database
                            connection.query(
                                insertQuery(hash),
                                (err, result) => {
                                    if (err) {
                                        logger.error(err);
                                        return res.status(500).send({
                                            msg: err
                                        });
                                    }
                                    logger.info("New user registered.")
                                    return res.status(200).send({
                                        msg: 'The user has been registerd with us!'
                                    });
                                }
                            );
                        }
                    });
                }
            }
        );
        connection.release();
    });
});
module.exports = router;
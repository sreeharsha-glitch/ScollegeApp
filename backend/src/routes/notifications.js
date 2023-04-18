//SJSU CMPE 138 Spring 2022 TEAM2
const express = require('express');
let db = require('../dbConnection');
const log4js = require('log4js');
const logger = log4js.getLogger();

const router = express.Router({ mergeParams: true })

router.get('/viewNotification', (req, res) => {
    // GET request: View Notfication
	// Required Parameters: s_id
	// URL /application/apply

    if (!req.body.s_id){
        logger.error("API Error: Bad Request");
        return res.sendStatus(400);
    }

    db.pool.getConnection((err, connection) => {
        if (err){
            logger.error(err);
            return res.sendStatus(500);
        }

        connection.query(`SELECT * FROM view_notification JOIN notification ON notification.n_id=view_notification.n_id WHERE view_notification.s_id=${req.body.s_id}`, (err, notifications) => {
            if (err){
                logger.error(err);
                return res.sendStatus(500);
            }

            if(!notifications || !notifications.length){
                logger.info("No notifications found for the selected student");
                return res.sendStatus(204);
            }

            logger.info("Notfications returned");
            return res.status(200).send({
                notifications: notifications
            });
        });
    });

});

router.get('/all', (req, res) => {
    // POST request:
    // Required Parameters
    db.pool.getConnection((err, connection) => {
        if (err){
            logger.error(err);
            return res.sendStatus(500);
        }
        const query = `CALL notification();`
        connection.query(query, (err, notifications) => {
            if (err){
                logger.error(err);
                return res.sendStatus(500);
            }
            logger.info('All notifications returned');
            return res.status(200).send({
                notifications: notifications
            });
        });
    });
});

// create notification 

router.post('/createNotification', (req, res) => {
    const {n_id,content} = req.body;
    const sqlQuery = `CALL createNotification('${n_id}','${content}')`

    pool.query(sqlQuery, (err, results) => {
        if (err) {
            logger.error(`Fectching details failed with error: ${err}`);
            res.send(`Error:${err}`);
        } else {
            // console.log(results[0])
            res.send(results[0]);
        }
    })
})

module.exports = router;
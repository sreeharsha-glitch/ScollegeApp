//SJSU CMPE 138 Spring 2022 TEAM2
const express = require("express");
let db = require("../dbConnection");
const { loginValidation } = require("../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const router = express.Router({ mergeParams: true });
const log4js = require('log4js');
const logger = log4js.getLogger();

const bodyParser = require("body-parser");
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/user", (req, res) => {
  // POST request: Student Login
  // Required Parameters: email, password
  // URL: /login/student

  const { type } = req.query;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error("API Error: Validation Failed");
    return res.status(400).json({ errors: errors.array() });
  }
  let query;

  if (type == "clo") {
    query = `SELECT * FROM clo WHERE name = '${req.body.name}'`;
  } else if (type == "provider") {
    query = `SELECT * FROM provider WHERE name = '${req.body.name}'`;
  } else {
    query = `SELECT * FROM student WHERE email = '${req.body.email}'`;
  }

  db.pool.getConnection((err, connection) => {
    if (err) {
      logger.error(err);
      return res.sendStatus(500);
    };
    connection.query(query, (err, result) => {
      // user does not exists
      if (err) {
        logger.error(err);
        return res.sendStatus(500);
      };
      if (!result.length) {
        logger.info("Email not found in databse");
        return res.status(401).send({
          msg: "Email is not registered.",
        });
      }
      // check password
      bcrypt.compare(
        req.body.password,
        result[0]["password"],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            logger.warn("Authentication Error");
            return res.status(401).send({
              msg: "AuthError",
            });
          }
          if (bResult) {
            //this token will be used to authenticate all further API calls
            delete result[0].password;
            logger.info(`User Logged In (${type})`);
            return res.status(200).send({
              msg: "Logged in!",
              user: result[0],
            });
          }
          logger.info("Incorrect Password");
          return res.status(401).send({
            msg: "Password is incorrect!",
          });
        }
      );
    });
  });
});
module.exports = router;

//SJSU CMPE 138 Spring 2022 TEAM2
const express = require("express");
let db = require("../dbConnection");
const router = express.Router();
const { updateProfileValidation } = require("../validation");
const { validationResult } = require("express-validator");
const { response } = require("express");
const log4js = require('log4js');
const logger = log4js.getLogger();

router.get("/viewProfile", (req, res) => {
  // GET request: View Student Profile
  // Required Parameters: s_id (student ID)
  // URL /student/viewProfile
  // will send user and profile(if exists)

  if (!req.query.s_id || req.query.s_id =="undefined") {
    logger.error("API Error: Bad Request");
    return res.status(500).send({
      msg: "StudentID Required.",
    });
  }
  db.pool.getConnection((err, connection) => {
    if (err){
      logger.error(err);
      return res.sendStatus(500);
    }
    connection.query(
      `SELECT * FROM student where s_id=${req.query.s_id}`,
      (err, user) => {
        if (err){
          logger.error(err);
          return res.sendStatus(500);
        }
        if (!user || !user.length) {
          logger.warn("Student not found");
          return res.status(409).send({
            msg: "Student ID not found",
          });
        }
        delete user[0].password;
        connection.query(
          `SELECT * from profile where s_id=${req.query.s_id}`,
          (err, profile) => {
            if (err){
              logger.error(err);
              return res.sendStatus(500);
            }
            if (!profile || !profile.length) {
              logger.info("Student details returned");
              return res.status(200).send({
                user: user[0],
              });
            } else {
              logger.info("Student profile returned");
              return res.status(200).send({
                user: user[0],
                profile: profile[0],
              });
            }
          }
        );
      }
    );
    connection.release();
  });
});

router.put("/updateProfile", updateProfileValidation, (req, res) => {
  // PUT request: Update student Profile
  // Required Parameters: s_id, email, high_qual, gpa, fai(family_annual_income)
  // URL /student/updateProfile
  // TODO: update Phones

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error("API Error: Validation Request");
    return res.status(400).json({ errors: errors.array() });
  }

  db.pool.getConnection((err, connection) => {
    if (err){
      logger.error(err);
      return res.sendStatus(500);
    }
    connection.query(
      `SELECT * FROM profile where s_id=${req.body.s_id}`,
      (err, profile) => {
        if (err){
          logger.error(err);
          return res.sendStatus(500);
        }

        //profile does not exists, create new profile
        if (!profile || !profile.length) {
          connection.query(
            `INSERT INTO profile(s_id, highest_qualification, family_annual_income, GPA)
                VALUES (${req.body.s_id}, '${req.body.high_qual}', ${req.body.fai}, ${req.body.gpa})`,
            (err) => {
              if (err){
                logger.error(err);
                return res.sendStatus(500);
              }
              logger.info("New profile created");
            }
          );
        } else {
          //profile exists, update existing profile
          connection.query(
            `UPDATE profile SET highest_qualification='${req.body.high_qual}', family_annual_income=${req.body.fai}, GPA=${req.body.gpa} where s_id=${req.body.s_id}`,
            (err) => {
              if (err){
                logger.error(err);
                return res.sendStatus(500);
              }
              logger.info("Profile updated");
            }
          );
        }

        //update email
        connection.query(
          `UPDATE student SET email='${req.body.email}' where s_id=${req.body.s_id}`,
          (err) => {
            if (err){
              logger.error(err);
              return res.sendStatus(500);
            }
            logger.info("Student Email updated");
            return res.sendStatus(200);
          }
        );

        connection.release();

      }
    );
  });
});

router.get('/verify', (req, res) => {
  if(!req.query.s_id){
    logger.error("API Error: Bad request");
    return res.sendStatus(400);
  }

  db.pool.getConnection((err, connection) => {
    if (err){
      logger.error(err);
      return res.sendStatus(500);
    }

    connection.query(`UPDATE profile set is_clo_verified=1 where s_id=${req.query.s_id}`, err => {
      if (err){
        logger.error(err);
        return res.sendStatus(500);
      }
      logger.info("Student verified");
      res.sendStatus(200);
    })
  });
});

router.get("/unapproved", (req, res) => {
  const { col_id } = req.query;

  if (!col_id){
    logger.error("API Error: Bad request");
    return res.sendStatus(400);
  }

  const query = `CALL unverified_student_list('${col_id}');`;

  db.pool.getConnection((err, connection) => {
    if (err){
      logger.error(err);
      return res.sendStatus(500);
    }

    connection.query(query, (err, rows) => {
      if (err){
        logger.error(err);
        return res.sendStatus(500);
      }
      if (rows) {
        logger.info("Unverified students returned");
        res.json({
          data: rows,
        });
      }
    });

    connection.release();
  });
});

router.get("/approved", (req, res) => {
  const { col_id } = req.query;

  if (!col_id){
    logger.error("API Error: Bad request");
    return res.sendStatus(400);
  }

  const query = `CALL verified_student_list('${col_id}');`;

  db.pool.getConnection((err, connection) => {
    if (err){
      logger.error(err);
      return res.sendStatus(500);
    }

    connection.query(query, (err, rows) => {
      if (err){
        logger.error(err);
        return res.sendStatus(500);
      }
      if (rows) {
        logger.info("Verified Students returned");
        res.json({
          data: rows,
        });
      }
    });

    connection.release();
  });
});
module.exports = router;

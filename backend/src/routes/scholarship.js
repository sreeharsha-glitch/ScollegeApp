//SJSU CMPE 138 Spring 2022 TEAM2
const express = require('express');
let db = require('../dbConnection');
const router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger();

router.get('/viewScholarships', (req, res) => {
   // GET request: View Scholarship
   // Required Parameters: returns all scholarship if no parameter, can accept p_id or sc_id(send either one)
   // URL /scholarship/viewScholarships

   db.pool.getConnection((err, connection) => {
      if (err) {
         logger.error(err);
         return res.sendStatus(500);
      };
      if (!req.query.p_id && !req.query.sc_id) {
         connection.query(`SELECT * FROM scholarship`, (err, scholarships) => {
            if (err) {
               logger.error(err);
               return res.sendStatus(500);
            };
            if (!scholarships || !scholarships.length) {
               logger.info("No scholarships found");
               return res.sendStatus(204);
            }

            logger.info(" All scholarships returned")
            return res.status(200).send({
               scholarship: scholarships
            });
         });
      }
      else {
         var type;
         if (req.query.p_id) type = 'p_id';
         else if (req.query.sc_id) type = 'sc_id';
         connection.query(`SELECT * FROM scholarship where ${type}=${req.query.p_id | req.query.sc_id}`, (err, scholarships) => {
            if (err) {
               logger.error(err);
               return res.sendStatus(500);
            };
            if (!scholarships || !scholarships.length){
               logger.info("No scholarships found");
               return res.sendStatus(204);
            }

            logger.info("Scholarships returned")
            return res.status(200).send({
               scholarship: scholarships
            })
         });
      }

      connection.release();
   });
});

router.delete('/', (req, res) => {

   if (!req.query.sc_id){
      logger.error("API Error: Bad request");
      return res.status(400).send({ err: "Scholarship ID required" });
   } 

   db.pool.getConnection((err, connection) => {
      if (err) {
         logger.error(err);
         return res.sendStatus(500);
      };

      connection.query(`DELETE from scholarship where sc_id=${req.query.sc_id}`, err => {
         if (err) {
            logger.error(err);
            return res.sendStatus(500);
         };
         logger.info("Scholarship deleted");
         return res.sendStatus(200);
      })

   });
});


router.get('/', (req, res) => {

   db.pool.getConnection((err, connection) => {

      if (err) {
         logger.error(err);
         return res.sendStatus(500);
      };

      connection.query('SELECT * FROM scholarship ;',
         (err, rows) => {
            if (err) {
               logger.error(err);
               return res.sendStatus(500);
            };
            if (rows) {
               logger.info("All scholarships returned");
               res.json({
                  data: rows
               });
            }
         }

      );

      connection.release();

   });


});

// create scholarship 

router.post('/create', (req, res) => {
   const { name, amount, deadline, purpose, p_id } = req.body

   db.pool.getConnection((err, connection) => {

      if (err) {
         logger.error(err);
         return res.sendStatus(500);
      };

      let query = `CALL create_scholarship('${name}','${amount}','${deadline}','${purpose}','${p_id}')`;

      connection.query(query,
         (err, result) => {
            if (err) {
               logger.error(err);
               return res.sendStatus(500);
            };
            if (result) {
               logger.info("New scholarship created");
               return res.status(200).send({
                  success: true,
                  result
               });
            }

         }

      );

      connection.release();

   });
})



router.put('/update', (req, res) => {
   const { sc_id, name, amount, deadline, purpose } = req.body

   db.pool.getConnection((err, connection) => {

      if (err) {
         logger.error(err);
         return res.sendStatus(500);
      };

      const query = `CALL update_scholarship('${sc_id}','${name}','${amount}','${deadline}','${purpose}')`;

      connection.query(query,
         (err, result) => {
            if (err) {
               logger.error(err);
               return res.sendStatus(500);
            };
            if (result) {
               logger.info("Scholarship updated");
               return res.status(200).send({
                  success: true,
                  result
               });
            }

         }

      );

      connection.release();

   });
})
module.exports = router;
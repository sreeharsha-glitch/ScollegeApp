//SJSU CMPE 138 Spring 2022 TEAM2

const express = require('express');
let db = require('../dbConnection');
const router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger();

router.get('/all', (req, res) => {

   db.pool.getConnection((err, connection) => {

      if (err) {
         logger.error(err);
         return res.sendStatus(500);
      }

      let query = `CALL list_events()`;

      connection.query(query,
         (err, events) => {
            if (err) {
               logger.error(err);
               return res.sendStatus(500);
            }

            if (events) {
               logger.info("All events returned");
               return res.status(200).send({
                  events: events
               });
            }


         }

      );

      connection.release();

   });


});

router.post('/create', (req, res) => {

   const { time, date, location, purpose } = req.body;

   if (!time || !date || !location || !purpose) {
      logger.error("API Error: Bad Request");
      return res.sendStatus(500);
   }

   db.pool.getConnection((err, connection) => {

      if (err){
         logger.error(err);
         return res.sendStatus(500);
      }

      let query = `CALL create_event('${time}','${date}','${location}','${purpose}' )`;

      connection.query(query,
         (err, result) => {
            if (err){
               logger.error(err);
               return res.sendStatus(500);
            }
            if (result) {
               logger.info("New event created");
               return res.status(200).send({
                  success: true,
                  result
               });
            }


         }

      );

      connection.release();

   });


});

router.put('/update', (req, res) => {

   const { e_id, time, date, location, purpose } = req.body;

   if (!e_id, !time || !date || !location || !purpose){
      logger.info("API Error: Bad Request");
      return res.status(400).send({ msg: 'Error' });
   } 

   db.pool.getConnection((err, connection) => {

      if (err){
         logger.error(err);
         return res.sendStatus(500);
      }

      let query = `CALL update_event('${e_id}','${time}','${date}','${location}','${purpose}' )`;

      connection.query(query,
         (err, result) => {
            if (err){
               logger.error(err);
               return res.sendStatus(500);
            }
            if (result) {
               logger.info("Event updated");
               return res.status(200).send({
                  success: true,
                  result
               });
            }


         }

      );

      connection.release();

   });


});

router.delete('/:id', (req, res) => {

   const { id } = req.params;

   db.pool.getConnection((err, connection) => {

      if (err){
         logger.error(err);
         return res.sendStatus(500);
      }

      let query = `CALL delete_event('${id}' )`;

      connection.query(query,
         (err, result) => {
            if (err){
               logger.error(err);
               return res.sendStatus(500);
            }
            if (result) {
               logger.info("Event deleted");
               return res.status(200).send({
                  success: true,
                  result
               });
            }


         }

      );

      connection.release();

   });
});

router.get('/organized', (req, res) => {

   const { s_id } = req.query;

   if (!s_id){
      logger.error("API Error: Bad Request");
      return res.sendStatus(400);
   }

   db.pool.getConnection((err, connection) => {

      if (err){
         logger.error(err);
         return res.sendStatus(500);
      }

      let query = `CALL events_organized_by_amb(${s_id})`;

      connection.query(query,
         (err, events) => {
            if (err){
               logger.error(err);
               return res.sendStatus(500);
            }
            if (events) {
               logger.info("Events returned");
               return res.status(200).send({
                  events: events
               });
            }


         }

      );

      connection.release();

   });


});

router.post('/organize', (req, res) => {

   const { e_id, s_id } = req.body;

   if (!e_id || !s_id) return res.status(400).send({ msg: 'Error' });

   db.pool.getConnection((err, connection) => {

      if (err){
         logger.error(err);
         return res.sendStatus(500);
      }

      let query = `CALL organize_events('${e_id}','${s_id}')`;

      connection.query(query,
         (err, result) => {
            if (err){
               logger.error(err);
               return res.sendStatus(500);
            }
            if (result) {
               logger.info("Events returned");
               return res.status(200).send({
                  success: true,
                  result
               });
            }
         }

      );

      connection.release();

   });


});

module.exports = router;
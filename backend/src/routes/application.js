//SJSU CMPE 138 Spring 2022 TEAM2
const express = require('express');
let db = require('../dbConnection');
const router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger();

router.get('/viewApplications', (req, res) => {
	// GET request: View Applications
	// Required Parameters: c_id, p_id, s_id, sc_id, app_id (either one of these)
	// URL /application/viewApplications

	if (!req.query.s_id && !req.query.p_id && !req.query.sc_id && !req.query.app_id) {
		logger.error("API Error: Wrong query");
		return res.sendStatus(400);
	}
	var type;
	if (req.query.s_id) type = 's_id';
	else if (req.query.p_id) type = 'p_id';
	else if (req.query.c_id) type = 'c_id';
	else if (req.query.sc_id) type = 'sc_id';
	else if (req.query.app_id) type = 'app_id';

	db.pool.getConnection((err, connection) => {
		if (err) {
			logger.error(err);
			return res.sendStatus(500);
		}

		connection.query(`SELECT * FROM application WHERE ${type}=${req.query.s_id | req.query.p_id | req.query.c_id | req.query.sc_id | req.query.app_id}`, (err, applications) => {

			if (err) {
				logger.error(err);
				return res.sendStatus(500);
			}

			if (!applications || !applications.length) {
				logger.info(`No applications found for selected ${type}`);
				return res.status(204).send("No applications found for this student");
			}

			logger.info(`Applications returned for selected ${type}`);
			return res.status(200).send({
				applications: applications
			})
		})
	});
});

router.post('/apply', (req, res) => {
	// POST request: New Application
	// Required Parameters: p_id, date, sc_id, s_id, c_id
	// URL /application/apply

	if (!req.body.p_id && !req.body.date && !req.body.sc_id && !req.body.s_id) {
		logger.error("API Error: Wrong query");
		return res.sendStatus(400);
	}

	let status = "Open"; //Initial application status

	let c_id;

	db.pool.getConnection((err, connection) => {
		if (err) {
			logger.error(err);
			return res.sendStatus(500);
		}

		connection.query(`SELECT app_id from application WHERE s_id=${req.body.s_id} AND sc_id=${req.body.sc_id}`, (err, application) => {
			if (err) {
				logger.error(err);
				return res.sendStatus(500);
			}

			if (application.length) {
				logger.info("Application already exists");
				return res.status(409).send({
					msg: "Application already exists",
					application: application
				})
			}
			else {
				const searchCLOQuery = `SELECT c.c_id FROM student AS S 
				JOIN clo AS C ON  S.col_id =  C.col_id AND s.s_id = '${req.body.s_id}'`;

				connection.query(searchCLOQuery, (err, rows) => {
					if (err){
						logger.error(err);
						return res.sendStatus(500);
					}
					if (rows && rows.length) {
						c_id = rows[0].c_id;
						connection.query(`INSERT INTO application(p_id, date, sc_id, s_id, c_id, status, status_date) VALUES (${req.body.p_id}, '${req.body.date}', ${req.body.sc_id}, ${req.body.s_id}, ${c_id}, '${status}', '${req.body.date}')`, (err) => {
							if (err){
								logger.error(err);
								return res.sendStatus(500);
							}
							logger.info("Application created")
							return res.sendStatus(200);
						});
					}
					else return res.sendStatus(400);
				})



			}
		});


	});

});

//TODO
router.post('/pay', (req, res) => {


	if (!req.body.app_id){
		logger.error("API Error: Bad Request");
		return res.status(400).send({ msg: "Application Id required" });
	} 
	if (!req.body.amt){
		logger.error("API Error: Bad Request");
		return res.status(400).send({ msg: "Amount required required" });
	} 

	let c_id, col_id, s_id, p_id;

	let today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;

	db.pool.getConnection((err, connection) => {
		if (err){
			logger.error(err);
			return res.sendStatus(500);
		}

		connection.query(`SELECT c_id, s_id, p_id from application where app_id=${req.body.app_id}`, (err, application) => {
			if (err){
				logger.error(err);
				return res.sendStatus(500);
			}

			c_id = application[0].c_id;
			s_id = application[0].s_id;
			p_id = application[0].p_id;

			connection.query(`SELECT col_id from student where s_id=${s_id}`, (err, student) => {
				if (err){
					logger.error(err);
					return res.sendStatus(500);
				}
				col_id = student[0].col_id;

				connection.query(`INSERT into payment(amt, col_id, s_id, c_id, app_id, p_id, pay_date) values(${req.body.amt}, ${col_id}, ${s_id}, ${c_id}, ${req.body.app_id}, ${p_id}, '${today}')`, (err) => {
					if (err){
						logger.error(err);
						return res.sendStatus(500);
					}
					logger.info("New Payment Created");
					return res.sendStatus(200);
				})

				
			});
		});


	});


});

router.get('/paymentStatus', (req, res) => {
	if (!req.query.app_id) return res.status(400).send({ msg: "Application Id required" });

	db.pool.getConnection((err, connection) => {
		if (err) console.log(err);

		connection.query(`SELECT * FROM payment where app_id=${req.query.app_id}`, (err, payments) => {
			if (err) console.log(err);

			if (!payments.length) {
				return res.status(409).send({
					msg: "Payment does not exist"
				});
			}
			return res.status(200).send({
				payment: payments
			});
		});

		connection.release();
	});

});

router.put('/updateFeedback', (req, res) => {
	if (!req.body.app_id) return res.status(400).send({ err: "Application ID requried" });
	if (!req.body.feedback) return res.status(400).send({ err: "Feedback required" });

	let today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;

	db.pool.getConnection((err, connection) => {
		if (err) console.log(err);

		connection.query(`UPDATE application set feedback='${req.body.feedback}', feedback_date='${today}' where app_id=${req.body.app_id}`, err => {
			if (err) console.log(err);

			return res.sendStatus(200);
		})
	})
});

router.put('/updateStatus', (req, res) => {
	if (!req.body.app_id) return res.status(400).send({ err: "Application ID requried" });
	if (!req.body.status) return res.status(400).send({ err: "Status required" });

	let today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;

	db.pool.getConnection((err, connection) => {
		if (err) console.log(err);

		connection.query(`UPDATE application set status='${req.body.status}', status_date='${today}' where app_id=${req.body.app_id}`, err => {
			if (err) console.log(err);

			return res.sendStatus(200);
		})
	})
});

router.get('/', (req, res) => {


	db.pool.getConnection((err, connection) => {

		if (err) console.log(err)

		connection.query('SELECT * FROM application ;',
			(err, rows) => {
				if (rows) {
					res.json({
						data: rows
					});
				}

			}

		);

		connection.release();

	});


});


module.exports = router;
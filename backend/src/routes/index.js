//SJSU CMPE 138 Spring 2022 TEAM2

const express = require('express');
const application = require('./application');
const login = require('./login');
const scholarship = require('./scholarship');
const signup = require('./signup');
const student = require('./student');
const notifications = require('./notifications');
const events = require('./events');

const router =express.Router()
router.get('/', (req, res) => res.send('OK'))

router.use('/application', application)
router.use('/scholarship', scholarship)
router.use('/student', student)
router.use('/login', login)
router.use('/signup', signup)
router.use('/notification', notifications)
router.use('/event', events)

module.exports = router;
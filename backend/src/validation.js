//SJSU CMPE 138 Spring 2022 TEAM2
const { check } = require('express-validator');

exports.signupValidation = [
    check('fname', 'First Name is requied').not().isEmpty(),
    check('lname', 'Last Name is requied').not().isEmpty(),
    check('col_id', 'College ID is requied').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]

exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]

exports.updateProfileValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('gpa', "Please provide numeric GPA").isNumeric(),
    check("s_id", "student id is requried").not().isEmpty(),
    check('high_qual', 'highest qualification required').not().isEmpty(),
    check('fai', 'family annual income required').not().isEmpty()
]
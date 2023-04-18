//SJSU CMPE 138 Spring 2022 TEAM2
const mysql = require('mysql2');
require('dotenv').config()

exports.pool = mysql.createPool({
  host     : process.env.SQL_SERVER,
  user     : process.env.SQL_USER,
  password : process.env.SQL_PASSWORD,
  database : process.env.SQL_DATABASE
});
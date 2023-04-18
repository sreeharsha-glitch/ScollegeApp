//SJSU CMPE 138 Spring 2022 TEAM2
const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');
const log4js = require('log4js');
const logger = log4js.getLogger();
// use the correct parser for parsing body
// const bodyParser = require('body-parser');
// // create application/json parser
// var jsonParser = bodyParser.json()
 
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
const port = 8080; // default port to listen

log4js.configure({
    appenders: {
        app: { type: 'file', filename: 'application.log'},
        users: {type: 'file', filename: 'application.log'}
    },
    categories: {
        userlog: { appenders: ['users'], level: 'info'},
        default: { appenders: ['app'], level: 'info'}
    }
})

app.use(cors());

app.use(express.json());

app.use('/', routes)

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
    logger.info("Server Started")
});
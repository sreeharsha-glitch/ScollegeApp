//SJSU CMPE 138 Spring 2022 TEAM2
let db = require('../dbConnection');

exports.dbConnect = function(query) {
    db.pool.getConnection((err, connection) => {
      
      if (err) console.log(err);
  
      connection.query(query, (err, rows) => {
        if (rows) {
      
         console.log(rows)
        }
      });
  
      connection.release();
    });
  }
  


var express = require('express');
var app = express();

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

const mysql = require('mysql');
const util = require('util');
var conn = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "mysql",
   database: "example_db"
});

const query = util.promisify(conn.query).bind(conn);

var sql = "SELECT event_date.Date, event.Name, event.Type, Location.Location_name"
   + " FROM event_date, event, location"
   + " WHERE event_date.Event_id = event.Event_id"
   + " AND event.Location_Location_id = Location.Location_id";


conn.connect(function (err) {
   if (err) throw err;

   app.get('/', function (req, res) {
      (async () => {
         try {
            const rows = await query(sql);
            let string = JSON.stringify(rows);
            res.send(string);
         } finally {
            conn.end();
         }
      })()
   })
});
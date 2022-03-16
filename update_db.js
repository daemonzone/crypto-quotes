// Parse data from JSON POST and insert into MYSQL

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');

// Configure MySQL connection
var connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'xxxxxxxxxxxxxxxx',
	password: 'xxxxxxxxxxxxxxxxx',
	database: 'cryptos'
  })

app.use(bodyParser.json())

//Establish MySQL connection
connection.connect(function(err) {
    if (err) 
      throw err
    else {
        console.log('Connected to MySQL');

        // Empty table...
        flushTable('coins');

        // EUR
        importData('eur');

        // USD
        importData('usd');
    }
});

var flushTable = function() {
        connection.query('TRUNCATE TABLE coins', function(err,result) {
          if(err) {
             console.log('Error', err);
          }
         else {
             console.log('Flushed');
          }
        });
}

var importData = function(currency) {
    var values = [];
    var jsondata = JSON.parse(fs.readFileSync('./data/coins_' + currency + '.json', 'utf8'));
    var timestamp = jsondata.status.timestamp.replace('T', ' ').replace('Z', '');

    for(var i=0; i< jsondata.data.length; i++) {
      values.push([jsondata.data[i].symbol, currency.toUpperCase(), jsondata.data[i].quote[currency.toUpperCase()].price, timestamp]);
    }

    insertData(connection, values, timestamp);
}

var insertData = function(connection, values, timestamp) {
        //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
        connection.query('INSERT INTO coins (symbol, currency, quote, timestamp) VALUES ?', [values], function(err,result) {
          if(err) {
             console.log('Error', err);
          }
         else {
             console.log('Data Imported');
          }
        });
}

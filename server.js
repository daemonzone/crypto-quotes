const express = require('express');
const app = express();
const fs = require("fs");


app.get('/api/coins', (req, res) => {

   fs.readFile( __dirname +'/data/coins_eur' +".json", 'utf8', function (err, data) {
       res.send(data);
       res.end( data );
   });

});


var server = app.listen(8081, () => {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

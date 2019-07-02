
var Converter = require('./converter');

var request = require('request');
var express = require('express');

var app = express();
var port = 3000;
var url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR0AEUW3HaGeggQ7sJjLrTOyKUM1o8joJHkjj0QM5c7RypdI8xlBOOTIuwo';


// app.get('/2', function(req, res) {
	
//     request( url, { json: true }, (err, res, body) => {
	 	
// 	    var baseCurrency  = body[2].buy;
//         // console.log(baseCurrency);
    
// 		var  exchange = new Converter(baseCurrency);

// 		console.log('UAH ' + exchange.convertToUa(1000));
// 		console.log('USD ' + exchange.convertToUs(1000));

//     });
//     // res.send(baseCurrency);
// });
// app.listen(port, function() {
// 	console.log('Server at http://localhost:3000');
// });
    


 app.get('/', function(req, res) {
	
    request( url, function(error, response, body) {
	 	
	 	var baseCurrency  = JSON.parse(body);
        console.log(baseCurrency[2].buy);
    
		var  exchange = new Converter(baseCurrency[2].buy);

		console.log('UAH ' + exchange.convertToUa(1000));
		console.log('USD ' + exchange.convertToUs(1000));

    	res.send(body);
    	
});

app.listen(port, function() {
	console.log('Server at http://localhost:3000');
});


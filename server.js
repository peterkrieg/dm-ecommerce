
//_________________________Dependencies__________________________
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();

app.use(bodyParser.json());

var db = mongojs('ecommerce');
var products = db.collection('products');






//_________________________Endpoints__________________________
app.post('/api/products', function(req, res, next){
	var newProduct = {
		name: req.body.name,
		price: Number(req.body.price),
		timeAdded: new Date()
	}

	products.insert(newProduct, function(err, result ){
		if(err) res.send(err);
		else{
			res.send(result);
		}
	});
});

app.get('/api/products', function(req, res, next){
	products.find(function(err, result){
		if(err) res.send(err);
		else{
			res.send(result);
		}
	});
});

app.put('/api/products', function(req, res, next){
	products.update({"_id": mongojs.ObjectId(req.query.id)}, req.body, function(err, result){
		if(err) res.send(err);
		else{
			res.send(result);
		}
	});
});

app.delete('/api/products', function(req, res, next){
	products.remove({"_id": mongojs.ObjectId(req.query.id)}, function(err, result){
		if(err) res.send(err);
		else{
			res.send(result);
		}
	});
});

app.delete('/api/productsALL', function(req, res, next){
	products.remove({}, function(err, result){
		if(err) res.send(err);
		else{
			res.send(result);
		}
	})
})


//_________________________Serving up front end__________________________

app.use(express.static(__dirname + '/client'));






var port = 3000;


app.listen(port, function(){
	console.log('listening on port '+port);
});
































//_________________________Stuff from gabes file__________________________
// Heroku sets the value of process.env.NODE_ENV
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';


// Heroku sets the port, but we also need a port for development
// var port = process.env.PORT || 8000;
//_____________________________________________________________________
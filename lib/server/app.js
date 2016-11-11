var express = require("express");
var app = express();
var index = require('./routes/index');
var bodyParser = require('body-parser');

//Routing Modules
var hello = require('./routes/welcome');
var parts = require('./routes/parts');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', index);
//Routes
app.get('/hello', hello);
app.use('/parts', parts);


//Static files

app.use(express.static('lib/public'));


app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function() {
    console.log("Server is listening on port: " + app.get('port'));
});

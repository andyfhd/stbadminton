var express = require('express');
var favicon = require('serve-favicon');

var app = express();



app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/index', function (req, res) {
    res.render('pages/index');
});

app.get('/about', function (req, res) {
    res.render('pages/about');
});

var server = app.listen(8080, function () {
    console.log('server is running at %s', server.address().port);
});

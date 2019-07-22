var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/user.route');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
})

app.use('/users', userRoute);

app.listen(port, () => console.log('Server is listening on port ' + port));


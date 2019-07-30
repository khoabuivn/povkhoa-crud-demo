require('dotenv').config()


var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');

var app = express();
var port = 3000;
var cookieParser = require('cookie-parser');
var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');


console.log(process.env.SESSION_SECRET); //Show process environment info or env variable

app.set('view engine', 'pug');
app.set('views', './views');

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
/*app.use(cookieParser('love1st'));*/
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
})

app.use('/users', authMiddleware.requireAuth, userRoute);
// app.use('/products', authMiddleware.requireAuth, productRoute);
app.use('/products', productRoute);
app.use('/auth', authRoute);
app.use('/cart', cartRoute);

app.listen(port, () => console.log('Server is listening on port ' + port));


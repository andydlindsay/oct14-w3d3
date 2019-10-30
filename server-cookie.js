const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 1234;

const users = {
  'abc123': {
    email: 'andy@4321.ca',
    password: 'password'
  },
  '456xyz': {
    email: 'user@example.com',
    password: '1234'
  }
};

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('*', (req, res) => {
  res.render('protected');
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

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
// app.use(cookieParser());
app.use(express.static('public'));
app.use(cookieSession({
  name: 'lecture',
  keys: ['whatever you want'],
  // secret: 'secret string'
}));

app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      if (user.password === password) {
        // log the user in (return) res.send
        // res.cookie('userId', userId);
        req.session.userId = userId;
        res.redirect('/');
      }
      // passwords don't match res.send
    }
    // email does not exist res.send
  }
  // final response
});

app.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/login');
});

// catchall
app.get('*', (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    res.redirect('/login');
  }
  const user = users[userId];
  if (!user) {
    res.redirect('/register');
  }
  const templateVars = { user };
  res.render('protected', templateVars);
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});

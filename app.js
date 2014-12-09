var express = require('express');
var stormpath = require('express-stormpath');

var app = express();


app.set('views', './views');
app.set('view engine', 'jade');
app.use('/profile',require('./profile')());

var stormpathMiddleware = stormpath.init(app, {
  apiKeyFile: 'apiKey.properties',
  application: process.env.stormpathapp,
  secretKey: 'stormpath',
  expandCustomData: true,
  enableForgotPassword: true
});

app.use(stormpathMiddleware);

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.listen(3000);
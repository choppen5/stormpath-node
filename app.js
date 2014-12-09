var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

var stormpathMiddleware = stormpath.init(app, {
  apiKeyFile: 'apiKey.properties',
  application: process.env.stormpathapp,
  secretKey: 'stormpath',
  expandCustomData: true,
  enableForgotPassword: true
});

app.use(stormpathMiddleware);
app.use('/profile', require('./profile')());

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.listen(3000);

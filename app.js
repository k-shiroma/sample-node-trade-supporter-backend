var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rolesRouter = require('./routes/roles');
var itemsRouter = require('./routes/items');
var pricesRouter = require('./routes/prices');
var recipesRouter = require('./routes/recipes');
var materialsRouter = require('./routes/materials');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/roles', rolesRouter);
app.use('/items', itemsRouter);
app.use('/prices', pricesRouter);
app.use('/recipes', recipesRouter);
app.use('/materials', materialsRouter);

module.exports = app;

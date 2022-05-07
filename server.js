const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

// sets up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
    
}
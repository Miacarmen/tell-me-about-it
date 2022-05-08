// require dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// import routes
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// import connection object
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize');
const { Sequelize } = require('sequelize/types');

const app = express();
const PORT = process.env.PORT || 3001;

// sets up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 900000,
    },
    resave: false,
    saveUninitialize: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// sets handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// connection to database before starting Express.js server
// force false to prevent drop tables on each sync
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
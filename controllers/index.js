// 
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepage-routes');
const dashboardRoutes = require('./dahboard-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
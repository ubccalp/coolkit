var { Router } = require('express');

var router = Router();

var community = require('./community');
var step_1 = require('./step-1');
var step_2 = require('./step-2');
var step_3 = require('./step-3');
var step_4 = require('./step-4');
var step_5 = require('./step-5');
var ed = require('./ed');
var about_us = require ('./about-us');

router.use('/step-1', step_1);
router.use('/step-2', step_2);
router.use('/step-3', step_3);
router.use('/step-4', step_4);
router.use('/step-5', step_5);
router.use('/ed', ed);
router.use('/resources', resources);
router.use('/community', community);
router.use('/about-us', about_us);
router.use('/background', background)



router.get('/', (req, res) => {
    res.render('index', { title: "Citizen's Coolkit" });
});

module.exports = router;

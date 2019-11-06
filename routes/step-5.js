var { Router } = require('express');

var router = Router();

//var step_5_a1 = require('./step-5-a1');

//router.use('/step-5-a1', step_5);

router.get('/', (req, res) => {
    res.render('step-5-activity-homepage', { title: 'Step 5: Action On The Ground' });
});

router.get('/a1', (req, res) => {
    res.render('step-5-activity-1', { title: 'Prioritize and Make a Pledge | Coolkit' });
});

router.get('/a2', (req, res) => {
    res.render('step-5-activity-2', { title: 'Make a Plan | Coolkit' });
});

router.get('/a3', (req, res) => {
    res.render('step-5-activity-3', { title: 'Beautify & Climate-Proof Your Yard | Coolkit' });
});

router.get('/a4', (req, res) => {
    res.render('step-5-activity-4', { title: 'Green & Climate-Proof Your Block | Coolkit' });
});

router.get('/a5', (req, res) => {
    res.render('step-5-activity-5', { title: 'Develop a Low-Carbon Lifestyle | Coolkit' });
});

router.get('/a6', (req, res) => {
    res.render('step-5-activity-6', { title: 'Retrofit Your Home | Coolkit' });
});

router.get('/a6-house', (req, res) => {
    res.render('step-5-activity-6-house', { title: 'Retrofit Your Home - House| Coolkit' });
});

router.get('/a6-apartment', (req, res) => {
    res.render('step-5-activity-6-apartment', { title: 'Retrofit Your Home - Apartment| Coolkit' });
});

router.get('/a7', (req, res) => {
    res.render('step-5-activity-7', { title: 'Community Energy | Coolkit' });
});

module.exports = router;

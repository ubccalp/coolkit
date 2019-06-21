var { Router } = require('express');

var router = Router();

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

module.exports = router;

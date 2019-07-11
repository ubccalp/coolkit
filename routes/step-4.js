var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('step-4-activity-homepage', { title: 'Step 4: Visioning Your Future' });
});

router.get('/a1', (req, res) => {
    res.render('step-4-activity-1', { title: 'What to Visualize | Coolkit' });
});

router.get('/a2', (req, res) => {
    res.render('step-4-activity-2', { title: 'From Visioning to Reality | Coolkit' });
});

router.get('/a3', (req, res) => {
    res.render('step-4-activity-3', { title: 'Retrofit Your Home | Coolkit' });
});

router.get('/a3-house', (req, res) => {
    res.render('step-4-activity-3-house', { title: 'Retrofit Your Home - House | Coolkit' });
});

router.get('/a3-apartment', (req, res) => {
    res.render('step-4-activity-3-apartment', { title: 'Retrofit Your Home - Apartment| Coolkit' });
});

router.get('/a4', (req, res) => {
    res.render('step-4-activity-4', { title: 'Community Energy | Coolkit' });
});

router.get('/a5', (req, res) => {
    res.render('step-4-activity-5', { title: 'Change Your Transportation | Coolkit' });
});

module.exports = router;

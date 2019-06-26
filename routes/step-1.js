var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('step-1-activity-homepage', { title: 'Step 1: Start A Conversation' });
});

router.get('/a1', (req, res) => {
    res.render('step-1-activity-1', { title: 'Story Collection | Coolkit' });
});

router.get('/a2', (req, res) => {
    res.render('step-1-activity-2', { title: 'Photo Gallery | Coolkit' });
});

router.get('/a3', (req, res) => {
    res.render('step-1-activity-3', { title: 'Photo Quiz | Coolkit' });
});

router.get('/a4', (req, res) => {
    res.render('step-1-activity-4', { title: 'Non-Trivia Quiz | Coolkit' });
});

module.exports = router;

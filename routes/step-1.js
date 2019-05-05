var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('step-1-activity-homepage', { title: 'Step 1: Start A Conversation' });
});

router.get('/a1', (req, res) => {
    res.render('step-1-activity-1', { title: 'Collecting Stories | Coolkit' });
});

module.exports = router;
var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('step-3-activity-homepage', { title: 'Step 3: Rate Your Block' });
});

router.get('/a1', (req, res) => {
    res.render('step-3-activity-1', { title: 'Rate Your Household | Coolkit' });
});

router.get('/a2', (req, res) => {
    res.render('step-3-activity-2', { title: 'Rate Your Block | Coolkit' });
});

module.exports = router;

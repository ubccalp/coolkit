var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('step-2-activity-homepage', { title: 'Step 2: Map Your Block' });
});

router.get('/a1', (req, res) => {
    res.render('step-2-activity-1', { title: 'Urban Forest Quest | Coolkit' });
});

router.get('/a2', (req, res) => {
    res.render('step-2-activity-2', { title: 'Climate Change Detective Quest | Coolkit' });
});

router.get('/a3', (req, res) => {
    res.render('step-2-activity-3', { title: 'Carbon Visual Quest | Coolkit' });
});

router.get('/a4', (req, res) => {
    res.render('step-2-activity-4', { title: 'Habitat Mapping | Coolkit' });
});

router.get('/a5', (req, res) => {
    res.render('step-2-activity-5', { title: 'Vulnerability Mapping | Coolkit' });
});

module.exports = router;

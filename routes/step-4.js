var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('step-4-activity-homepage', { title: 'Step 4: Visioning Your Future' });
});

module.exports = router;
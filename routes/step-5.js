var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('step-5-activity-homepage', { title: 'Step 5: Action On The Ground' });
});

module.exports = router;
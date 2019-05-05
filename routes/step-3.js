var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('step-3-activity-homepage', { title: 'Step 3: Rate Your Block' });
});

module.exports = router;
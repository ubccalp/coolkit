var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('feedback', { title: 'Feedback' });
});

module.exports = router;

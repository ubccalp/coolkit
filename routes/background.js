var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('background', { title: 'Background' });
});

module.exports = router;

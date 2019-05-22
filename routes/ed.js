var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('ed', { title: 'Teacher Resources' });
});

module.exports = router;

var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('resources', { title: 'Teacher Resources' });
});

module.exports = router;

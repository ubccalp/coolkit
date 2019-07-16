var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('resources', { title: 'Additional Resources' });
});

module.exports = router;

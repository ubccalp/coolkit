var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.render('community', { title: 'Community Version' });
});

module.exports = router;

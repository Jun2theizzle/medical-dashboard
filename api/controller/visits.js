const express = require('express');
const fakeDb = require('../util/fakeDb')
const router = express.Router();

router.get('/', (req, res) => {
    const visits = fakeDb.query('some fake query');
    res.json({
        visits: visits
    })
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.json({ 'api-key': 'your api key'});
});

module.exports = router;
const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.json('Welcome to the Apple CEOs v4 API').status(200);
});

module.exports = router;

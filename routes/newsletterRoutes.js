const express = require('express');
const router = express.Router();
const { subscribe } = require('../controllers/NewsletterController');

router.post('/', subscribe);

module.exports = router;

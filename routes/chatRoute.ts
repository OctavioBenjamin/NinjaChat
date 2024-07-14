const express = require('express');
const { createChat } = require('../controllers/chatController');

const router = express.Router();

router.post('/create-chat', createChat);

module.exports = router;
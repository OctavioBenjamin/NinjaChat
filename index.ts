const express = require('express');
const chatRoutes = require('./rotes/chatRoutes');

const router = express.Router();

router.use('/chat', chatRoutes);

module.exports = router;

export {};
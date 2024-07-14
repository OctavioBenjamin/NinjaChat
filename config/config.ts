require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  chatExpiration: process.env.CHAT_EXPIRATION || 15 // duración en minutos
};
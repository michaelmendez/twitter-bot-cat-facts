require('dotenv').config();

module.exports = Object.freeze({
  APP_KEY: process.env.APP_KEY || '',
  APP_SECRET: process.env.APP_SECRET || '',
  ACCESS_TOKEN: process.env.ACCESS_TOKEN || '',
  ACCESS_SECRET: process.env.ACCESS_SECRET || '',
  PORT: process.env.PORT || 8080,
});

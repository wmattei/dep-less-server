const router = require('../config/router');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: router(require('./users')),
  },
];

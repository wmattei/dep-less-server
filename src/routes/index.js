const router = require('../config/api/router');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: router(require('./users')),
  },
];

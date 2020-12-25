const { listUsers } = require("../../controllers/user");

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: listUsers
  },
];

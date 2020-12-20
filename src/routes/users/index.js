module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (req, res) => {
      return { users: [] };
    },
  },
];

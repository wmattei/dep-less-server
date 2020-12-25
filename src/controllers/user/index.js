const { run } = require("../../config/database/drivers/mongodb");

const listUsers = async (req, res) => {
  res.statusCode = 200;
  const ls = await run('ls -la')
  return ls;
};

module.exports = { listUsers };

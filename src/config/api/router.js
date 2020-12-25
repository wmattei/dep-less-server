module.exports = (routes) => async (req, res) => {
  if (!routes) throw Error('No endpoints defined');

  // const
  const { url, method } = req;

  const route = routes.find((route) => {
    const methodMatch = route.method === method || route.method === '*';
    const urlMatch = url.startsWith(route.path) || route.path === '*';
    return methodMatch && urlMatch;
  });
  if (!route) {
    res.statusCode = 404;
    res.statusMessage = 'Not found';
    res.end();
    return;
  }
  const data = JSON.stringify(await route.handler(req, res));
  if (data) {
    res.write(data);
    res.end();
  }
};

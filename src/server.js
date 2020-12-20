const http = require('http');

const PORT = process.env.port || 3000;
// http.createServer((req, res) => {
//   res.
// })
const server = http.createServer(
  require('./config/router')(require('./routes'))
);

server.listen(PORT);

server.on('listening', () => console.log(`Server started on port ${PORT}`));

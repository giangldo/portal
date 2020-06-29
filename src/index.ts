import http from 'http';

import { app } from './app';

const server = http.createServer(app);

server.listen(5000, () => {
  console.log('listen port 5000');
});

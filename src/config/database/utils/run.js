const { exec } = require('child_process');

const run = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout) => {
      if (err) {
        reject(err);
      }

      resolve(stdout);
    });
  });
};

module.exports = { run };

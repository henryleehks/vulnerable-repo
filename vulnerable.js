// VULN: command injection (do NOT run)
const { exec } = require('child_process');

function listFiles(dir) {
  // BAD: user-supplied dir inserted into shell command
  exec("ls " + dir, (err, stdout, stderr) => { /* ... */ });
}

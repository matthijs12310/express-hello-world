const { exec } = require("child_process");
const express = require('express')
const app = express()
const port = 3000


const vscodeServer = spawn('code-server', ['--port', '8080']);

vscodeServer.stdout.on('data', (data) => {
    console.log(`VSCode Server Output: ${data}`);
});

vscodeServer.stderr.on('data', (data) => {
    console.error(`VSCode Server Error: ${data}`);
});

vscodeServer.on('close', (code) => {
    console.log(`VSCode Server Exited with code ${code}`);
});

console.log('VSCode Server running at http://localhost:8080');

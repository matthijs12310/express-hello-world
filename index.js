const { exec } = require("child_process");

exec("curl -fsSL https://code-server.dev/install.sh | sh", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);

});
});
var http = require('http');
http.createServer(function (req, res) {
    exec("code-server /", (error2, stdout2, stderr2) => {
    if (error2) {
        console.log(`error: ${error2.message}`);
        return;
    }
    if (stderr2) {
        console.log(`stderr: ${stderr2}`);
        return;
    }
    console.log(`stdout: ${stdout2}`);
}).listen(process.env.PORT || 3000);

const { spawn, spawnSync } = require("child_process");

$("npm", "install");
$("node", "main.js");

function $(cmd, ...args){
    const result = spawnSync(cmd, args, { stdio: 'inherit' });
    if (result.error) {
        console.error(result.error);
    }
    if (result.status) {
        console.error("status code", result.status);
        process.exit(1);
    }
}
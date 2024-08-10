const { spawn, spawnSync } = require("child_process");

sh("npm", "install");
sh("node", "main.js");

function sh(cmd, ...args){
    const result = spawnSync(cmd, args, { stdio: 'inherit' });
    if (result.error) {
        console.error(result.error);
    }
    if (result.status) {
        console.error("status code", result.status);
        process.exit(1);
    }
}

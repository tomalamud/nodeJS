const { exec, spawn } = require('child_process');

exec('ls -la', (err, stdout, stderr) => {
    if(err){
        console.error(err);
        return false;
    } 
    console.log(stdout);
})

let proc = spawn('ls', ['-lh']);

console.log(proc.pid);

proc.stdout.on('data', (dato) => console.log(dato.toString()));
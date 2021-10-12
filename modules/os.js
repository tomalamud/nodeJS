const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log(os.constants);


const KB = 1024;
function kb(bytes){ return bytes / KB }
function mb(bytes){ return kb(bytes) / KB }
function gb(bytes){ return mb(bytes) / KB }
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());
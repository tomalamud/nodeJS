const fs = require('fs');
// const stream = require('stream');
// const util  = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

// /* read stream */
// readableStream.on('data', function (chunk) {
//     data += chunk;
// });
// readableStream.on('end', () => {
//     console.log(data);
// })

// /* Salida del sistema */
// process.stdout.write('Hola ');
// process.stdout.write('Qué ');
// process.stdout.write('Tal');

// const Transform = stream.Transform;

// function Mayus() {
//     Transform.call(this);
// }
// util.inherits(Mayus, Transform);

// Mayus.prototype._transform = (chunk, codif, cb) => {
//     chunkMayus = chunk.toString().toUpperCase();
//     this.push(chunkMayus);
//     cb();
// }
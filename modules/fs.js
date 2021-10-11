const fs = require('fs')

function read(path) {
    fs.readFile(path, (err, data) => { // la uri y un cb que debe tener el 'err' para catchear errores por más que no se usen; y el param que tiene la data
        console.log(data.toString());
    });
}

read(__dirname + '/archivo.txt');

function write(path, content) {
    fs.writeFile(path, content, (err) => {
        if(err) {
            console.error('No se ha podido escribir: ', err);
        } else {
            console.log('Se ha escrito correctamente.');
        }
    });
}

write(__dirname + '/archivo2.txt', 'Hola');

function dilete(path, cb) {
    fs.unlink(path, cb);
}

setTimeout(() => {
    dilete(__dirname + '/modules/archivo2.txt', console.log);
}, 4000);
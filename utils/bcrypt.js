const bcrypt = require('bcrypt');

const fs = require('fs');

const password = '1234Secure!';

/* Con callbacks */
// bcrypt.hash(password, 3, (err, hash) => {
//     try {
//         console.log(hash)
//         bcrypt.compare(password, hash, (err, res) => {
//             console.log(res);
//         });
//     } catch {
//         console.error(err);
//     }    
// });

function write(path, content) {
    fs.writeFile(path, content, (err) => {
        if(err) {
            console.error('No se ha podido escribir: ', err);
        } else {
            console.log('Se ha escrito correctamente.');
        }
    });
}

/* Con Promesas */
let cryptoPromise = new Promise((resolve, reject) => {
    bcrypt.hash(password, 5, (err, hash) => {
        if(err) {
            reject(err);
        }
        resolve(hash);
    });
});

cryptoPromise
    .then((result) => {
        saveToDatabase(result);
    })
    .catch((err) => {
        console.log(err);
    });

function saveToDatabase(res) {
    console.log('password encrypted...');
    console.log(res);
    write(__dirname + '/pw.txt', res);
}



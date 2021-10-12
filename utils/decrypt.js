const bcrypt = require('bcrypt');

const fs = require('fs');

const password = '1234Secure!';

function read(path) {
    fs.readFile(path, (err, data) => {
        return data.toString();
    });
}

const pwhash = Object.toString(read(`${__dirname}/pw.txt`));

bcrypt.compare(password, pwhash, (err, res) => {
    if(err) {
        console.error(err);
    }
    console.log(res);
});
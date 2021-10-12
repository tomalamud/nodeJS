const http = require('http');

http.createServer((request, response) => {
    console.log('Nueva petición.');
    console.log(request.url);

    response.write('Hola, ya se usar HTTP de NodeJS!');
    response.end();
}).listen(3000);

console.log('Escuchando el puerto 3000');
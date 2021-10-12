const http = require('http');

http.createServer(router).listen(3000);

function router(request, response) {
    console.log('Nueva petición.');
    console.log(request.url);

    response.writeHead(201, { 'Content-Type': 'text/plain' });

    switch (request.url) {
        case '/hola':
            response.write('Hola, que tal?');
            response.end();
            break;
        
        default:
            response.write('Hola, ya se usar HTTP de NodeJS!');
            response.end();
            break;
    }

}

console.log('Escuchando el puerto 3000');
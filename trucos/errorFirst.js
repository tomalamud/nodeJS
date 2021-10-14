/* Error First Callback Example */

function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + 4; // Cambiar el 4 por una letra para ver la magia.
            callback(null, a); // el null podría bien ser false o undefined.
        } catch(err) {
            callback(err);
        }
    }, 1000);
};

asincrona((err, datos) => {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false; // parar en seco la función.
    }
    
    console.log('Todo salió bien, mi data es: ', datos);
});
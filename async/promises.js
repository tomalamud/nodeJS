function promiseFunc(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola, ", nombre);
            resolve(nombre);
        }, 1500);
    });
};

console.log("iniciando proceso...");

promiseFunc('Tomás')
    .then(() => console.log("terminando proceso..."));
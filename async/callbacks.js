function asyncFunc(miCallback) {
    setTimeout(() => { 
        console.log("Esta es una función asíncrona");
        miCallback();
    }, 1000);
    
};

console.log("Iniciando proceso...");
asyncFunc(() => console.log("Terminando proceso..."));

console.log("Iniciando proceso 2...");

function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log("Hola, ", nombre);
        miCallback(nombre);
    }, 1500);
};

function adios(nom, otroCallback) {
    setTimeout(() => {
        console.log("Adios, ", nom);
        otroCallback();
    }, 1000);
}

hola("Tomás", (n) => {
    adios(n, () => {
        console.log("Teminando proceso 2...");
    });
});

// En cada bloque se entiende que se está hablando de la misma variable.
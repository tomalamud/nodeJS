console.time('todo');
let suma = 0;
console.time('bucle');
for(let i = 0; i < 2000000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

console.time('asincrono');
asincrona();
console.timeEnd('asincrono');


let suma2 = 0;
console.time('bucle 2');
for(let j = 0; j < 2000; j++) {
    suma2 += 1;
}
console.timeEnd('bucle 2');
console.timeEnd('todo');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => console.log('termina...'));
        resolve();s
    });
};
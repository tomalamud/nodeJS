console.log('Algo');

console.group('Conversación');
console.log('hola');
console.log('que onda');
console.log('super bien y vos?');
console.groupEnd('Conversación');

console.info('Esto es info..');

let tabla = [
    {
        a: 1,
        b: 'y'
    },
    {
        a: 2,
        b: 'y'
    }
]

console.table(tabla);

for(let i = 0; i < 3; i++){
    console.count('vez')
}

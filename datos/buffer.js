// let buffer = Buffer.alloc(4); /* <Buffer 00 00 00 00> */
let buffer = Buffer.from([1, 2, 3, 4]); /* <Buffer 01 02 03 04> */
let buffer2 = Buffer.from('Tomás Elizondo'); /* <Buffer 54 6f 6d c3 a1 73 20 45 6c 69 7a 6f 6e 64 6f> */
console.log(buffer2);

console.group(' ')
let abc = Buffer.alloc(26);
console.log(abc);
for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}
console.log(abc.toString());
console.groupEnd(' ')
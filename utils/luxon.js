/* https://moment.github.io/luxon/#/?id=luxon */

const luxon = require('luxon');

let now = luxon.DateTime.now();

console.log(`${now.day}/${now.month}/${now.year} --> the exact hour is: ${now.hour}:${now.minute}:${now.second}`);


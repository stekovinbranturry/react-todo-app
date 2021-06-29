const { is, Map } = require("immutable");

const map1 = Map({ a: 1, b: 1, c: 1 })
const map2 = Map({ a: 1, b: 1, c: 1 })

console.log(map1 === map2)   //false
console.log(Object.is(map1, map2)) // false
console.log(is(map1, map2)) // true

const map3 = map1.set('a', 1);
console.log('map1', map1)
console.log('map3 :', map3);

console.log(map1 === map3)   //true
console.log(Object.is(map1, map3)) // true
console.log(is(map1, map3)) // true

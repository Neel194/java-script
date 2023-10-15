const marvel_heros = ["ironman","thor","loki"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_Heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_Heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Neel"))  //false
console.log(Array.isArray([1,2,3]))  //true
console.log(Array.from("Neel"))   // ['N','e','e','l']
console.log(Array.from({name: "neel"}))   // [] // IMPORTANT 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //[100,200,300]

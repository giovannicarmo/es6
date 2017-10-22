//Novos modo de deckarar uma função no ES6
const helloWorld = msg => `Giovanni say's: ${msg}`;

const hiMissing = msg => {
  console.log(`${msg}`);
}

//Retornando objetos
const getNeighbor = n => ({ left: n-1, right: n+1 });

console.log(helloWorld('Hello world!'));
hiMissing('Oi sumida.');
console.log(getNeighbor(7));
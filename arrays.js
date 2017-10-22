const numbers = [1,2,3,4,5];
//Filtra resultado de exibição
console.log(String(numbers.filter(n => n > 4)));
//Faz soma do acúmulo + parâmetro
console.log(numbers.reduce((acum, current) => acum + current, 10));
//Busca de valores
console.log(numbers.find(n => n === 3));
//Populando array com array
const [a,b,c,d,e, f = null] = numbers;
const [g,h, ...i] = numbers;
//População de valores selecionados
const [j,,k,,l] = numbers;
//Troca de valores
let [m,n] = numbers;
[m,n] = [n,m];
//Populando array com outro array no mesmo nível
const moreNumbers = [...numbers, 6,7,8,9,10];
//Populacão normal
console.log(a,b,c,d,e);
//População com valores padrão quando há falta de parâmetro
console.log(a,b,c,d,e,f);
//População de mais um valor no por posição
console.log(g,h,i);
//
console.log(j,k,l);
//
console.log(m,n);
//
console.log(moreNumbers);
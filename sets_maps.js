let honey = {
    raza: 'atigrado',
    edad: 3
}

let garfield = {
    raza: 'naranja',
    edad:99
}

let gatosMap = new Map();
gatosMap.set(honey,'jugar con raton');
gatosMap.set(garfield,'come todo el día');

console.log(gatosMap);




//FOR OFF -> oara ibjetos iterables, es decir que tengan un indice
for (let [key, value] of gatosMap){
    console.log ('key', key);
    console.log ('value', value);
}

//FOR IN -> para objetos no iterables, como un objeto
let coche ={
    marca:'ford',
    modelo: 'mustang',
    color: 'amarillo',
    year: '2023',
    etique: 'ECO'
}

for (let param in coche) {
    console.log (param, coche[param]);
}


/* EJERCICIOS */

/* Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:
 */

let popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35} //
]

for (let toy of toys) {
    if (toy.sellCount > 14) {
        popularToys.push(toy);
    } 
}

console.log(popularToys);


let toysMap = new Map();
let newToysArray = new Array();
let toy1 = 	{id: 23, name: 'Barbie Man'}; // 15
let toy2 = {id: 40, name: 'El gato con Guantes'}; // 8
let toy3 = {id: 40, name: 'El gato felix'}; // 35 

// insertar los toy en el mapa
toysMap.set(toy1,15);
toysMap.set(toy2,8);
toysMap.set(toy3,35);

// iterar el mapa y guardar los que tengan mas de 14
for (let toys of toysMap) {
    if (toys.sellCount > 14) {
        newToysArray.push(toys);
    } 
}
// imprimir el array nuevo
console.log (newToysArray);

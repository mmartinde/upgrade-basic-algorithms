let toysMap = new Map();
let newToysArray = new Array();
let toy1 = 	{id: 23, name: 'Barbie Man'}; // 15
let toy2 = {id: 40, name: 'El gato con Guantes'}; // 8
let toy3 = {id: 40, name: 'El gato felix'}; // 35 
toysMap.set(toy1, 15);
toysMap.set(toy2, 8);
toysMap.set(toy3, 35);
newToysArray = Array.from(toysMap.values());
newToysArray = Array.from(toysMap.keys());
newToysArray = Array.from(toysMap.entries());


let rowAcolA; // extraer de mi mapa el parametro A del juguete uno. 
for (const [toy, value] of toysMap) {
    if (toy === toy2) {
      rowAcolA = toy.id;
      break;
    }
  }

let rowAcolC = newToysArray[0][1]; // extraer de mi mapa el parametro A del juguete uno. 
  

console.log('toyMap',toysMap);
console.log('newToysArray',newToysArray );

console.log ('valor rewcol',rowAcolA);
console.log ('valor rewcolc',rowAcolC);
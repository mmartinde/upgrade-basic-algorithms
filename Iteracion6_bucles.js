/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola. */

/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0. */

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'. */

/* var arrayCoches2 =['ferrary','audi', 'seat', 'dacia', 'for', 'chevrolet', 'toyota', 'kia' ]; */

/* let isBMW;
for (let i = 0; i < arrayCoches2.lenght; i++) {
     if (arrayCoches2[i] == 'bmw'){
        isBMW=true;
        break;
    } 
    if ( i == arrayCoches2.length -1 && !isBMW) {
        isBMW = false;
    }

} */

/* console.log ('for BMW', isBMW); */

/* let isIncluded = ('ana');
let names = ['juan', 'ramón', 'julio', 'ana', 'beatriz'] */
// b: dado el array ['juan', 'ramón', 'julio', 'ana', 'beatriz'], añadir un nombre nuevo detras de cada uno existente usando bucles.

/* let names = ['juan', 'ramón', 'julio', 'ana', 'beatriz'];
let names2 = ['maria','marisa','andres','evelio','juana'];
let newNames = new Array(); 
for (i=0; i<names.length - 1; i++){
    newNames.push(names[i]);
    newNames.push(names2[i]);
 }
console.log(newNames);
let newNames2 = new Array();
let ind=0;
names.forEach(element => {
    newNames2.push(names[element]);
    newNames2.push(names2[i]);
    ind++;
});
console.log(newNames2); */

// c: averigua si el número 2 existe en la siguiente matriz usando solo bucles:
/* let matriz = [
  [1, 2, 4],
  [2, 3, 4],
  [5, 6, 7],
];
let isTWO = false;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] == 2) {
      isTWO = true;
      break;
    }
  }
}
console.log("isTWO es ", isTWO); */


//Sumar los 100 primeros números primos

let primos = new Array();

let n = 71;
let i= 3
if (n % i === 0 || n % (i + 2) === 0) {
    return false;
  }



  /*mapa menu alimentaciión*/
let menus = new Map ();
let lunes = {dia: 'lunes', primero: 'macarrones', segundo:'filete', postre: 'yogur'};
let martes = {dia: 'martes', primero: 'sopa', segundo: 'hamburguesa', postre: 'tiramisu'};
let miercoles = {dia: 'miercoles', primero: 'ensalada', segundo: 'pescado', postre: 'mnazana'};

menus.set (lunes, 'calorias sanas');
menus.set (martes, 'fechoria');
menus.set (miercoles, 'portarse bien');

console.log ('menu', menus);

for (let [k,v] of menus){
    //console.log (k,k.primero);
    if (k.segundo) == 'hamburguesa'{
        console.log ('vamos');
    } else {
        console.log ('no vamos');
    }
}

for (let [k,v] of menus){
    if (k.dia == 'miercoles' && k.primero =='ensalada'){
        k.primero ='gazpacho';
    }

}
console.log ('menu', menus);


/* mapa de grupos de música*/
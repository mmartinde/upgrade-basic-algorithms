/* 1. DEFINICION DE VARIABLES */

/* 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella. */
let myFavoriteHero='Hulk';

/* 1.2 Crea una variable llamada x, asigna el valor 50 a ella. */
let x=50;

/* 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.  */
let h=5;
let y=10;

/* 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'. */
let z=h+y;
console.log(z);

/* 2. SCOPE - ALCANCE */



/* 3. ECMA 6 ESTANDAR */
let name2='pepe';
const age2=28;


/* 4. TIPOS DE DATOS (string,number, boolean, null, undefined, Object) */

/* Lenguajes tipados, hay que decir de que tipo es la variable. JAVASCRIPT es un Lenguajes NO tipoda

tipos primitivos; string,number, boolean, null, undefined
tipos compuestos u objetos; por ejemplo... */
let gato = {
    nombre:'mimi',
    edad:11,
    vacunado: true,
    raza: 'angora',
    horario: {
        manana:9,
        tarde: 15,
        noche:21
    }
}
console.log ('Esta vacunado?',gato.vacunado);
console.log ('A que hora cena el gato',gato.horario['noche'],'h');

let gato2 = {
    nombre:'honey',
    edad:1,
    vacunado: true,
    raza: 'atigrado',
    horario: {
        manana:6,
        tarde: 14,
        noche:19
    }
}

console.log ('Cual es la edad de los 2 gatos?', gato.edad + gato2.edad);

/*Iteración #2: Variables avanzadas */

/* 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25. */
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

/* 1.2 Declara 3 variables con los nombres y valores siguientes  */
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24; 

console.log ('Soy', firstName, lastName,',', 'tengo',age, 'años y me gustan los lobos.');

/* 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes. */
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log (toy1.price+toy2['price']);

/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice. */
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice =car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log ('valor globalBasePrice tras actualizarse es igual a', globalBasePrice, '; valor de car1 finalPrice es:',car1['finalPrice'], ' y valor car2 finaPrice es:', car2.finalPrice);



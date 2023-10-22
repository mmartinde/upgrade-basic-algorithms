
/* 1. DEFINICIÓN DE VARIABLES */
// las variables se definen: 
// palabra reservada let, const o var + nombreVariable + = + Valor de la varible
var name = 'pepe';


/* 2. SCOPE - ALCANCE */
// las variables alcanzan el bloque de código en el que se definen, o la totalidad si se definen a nivel global.

var nombre = 'pepe'; // global

function decirNombre () {
    let mensaje = "Mi nombre es " + nombre; // local
    console.log(mensaje);
}

decirNombre();

/* 3. ECMA 6 ESTANDAR */
// es preferible utilizar las declaraciones let (variable) y const (constante) a var
let name2 = 'pepe';
const name3 = 'pepe';

/* 4. TIPOS DE DATOS (string, number, boolean, null, undefined, object */
let string = 'cadena de texto con cualquier caracter alfanumérico y más';
let number = 1;
let bool = true;
let undef; // undefined


/* 5. OBJETOS */

// estos son dos objetos representando gatos, se utiliza la notacion JSON
const misifu = {
    nombre : "misifu",
    edad: 11,
    vacunado: true,
    raza: 'angora',
    horarios: {
        manana: 9,
        tarde: 3,
        noche: 10
    }
}

const honey = {
    nombre : "honey",
    edad: 1,
    vacunado: true,
    raza: 'atigrado',
    horarios: {
        manana: 9,
        tarde: 3,
        noche: 10
    }
}

/* 6. ARRAY */

let arrayGatos = [misifu, honey];
let arrayNumeros = [1, 2, 5, 6, 7, 999];

console.log('array gatos', arrayGatos);
console.log('misifu', arrayGatos[0]);



/* EJERCICIOS */

/* 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25. */
let character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

/*1.2 Declara 3 variables con los nombres y valores siguientes */
	let firstName = 'Jon'; 
	let lastName = 'Snow'; 
	let age = 24; 
/*Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.' */
console.log ('Soy', firstName, lastName, 'tengo', age, 'años y me gustan los lobos.');

/*1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.*/
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

let totalPriceToys = toy1.price + toy2.price;

/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice. */
let globalBasePrice = 10000;
let car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
let car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000}; 
 globalBasePrice = 25000;
car1.finalPrice = car1.finalPrice + globalBasePrice;
car2.finalPrice = car2.finalPrice + globalBasePrice;




<!-- 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola. -->
let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

/* 1.2 Cambia el primer elemento de avengers a "IRONMAN" */
let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "IRONMAN";

/* 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array. */
let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log (avengers.length)

/* 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array */
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push ("Mortu","Summer");


/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola. */
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

/* 1.6 Elimina el segundo elemento del array y muestra el array por consola. */
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
console.log ("rick");



let arrayCoches = [mercedes, bmw, ford, audi, volfwagen, skoda];

arrayCoches.forEach(element=>{
    let aux = element;
    aux[0]=aux[0][0].toUpperCase();
    /* consolelog(typeof(aux[0])) */
    arrayCoches.push(aux);

})
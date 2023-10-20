/* 
Las notas de María, Juan y Luis en los 3 exámenes de evaluación son respectivamente:

María: 10, 3, 6, 7
Juan: 5, 6, 1, 4
Luís: 9, 1, 1, 8

- define un objeto para cada estudiante donde se vean reflejadas las notas
- crea un bloque if - else if en el que se devuelva si el estudante suspende (<5) aprueba (5 - 7) o tiene un notable (>= 8), tendras que hacer la media.
- testea el bloque con cada alumno

*/
//Definición del Objeto Estudiante
let maria = {
    nota01 : 10,
    nota02 : 3,
    nota03 : 6,
    nota04 : 7
} 

let juan = {
    nota01 : 5,
    nota02 : 6,
    nota03 : 1,
    nota04 : 4
} 

let luis = {
    nota01 : 9,
    nota02 : 1,
    nota03 : 1,
    nota04 : 8
} 

let notaMaria = ((maria.nota01+maria.nota02+maria.nota03+maria.nota04)/4);

let notaJuan = ((juan.nota01+juan.nota02+juan.nota03+juan.nota04)/4);

let notaLuis = ((luis.nota01+luis.nota02+luis.nota03+luis.nota04)/4);

if (notaMaria < 5) {
    console.log("Maria SUSPENDO con una nota de "+notaMaria);
} else if (notaMaria > 5 || notaMaria < 7) {
    console.log("Maria APRUEBA con una nota de "+notaMaria);
} else if (notaMaria >= 8) {
    console.log("Maria tiene un NOTABLE con una nota de "+notaMaria);
}

if (notaJuan < 5) {
    console.log("Juan SUSPENDE con una nota de "+notaJuan);
} else if (notaJuan > 5 || notaJuan < 7) {
    console.log("Juan APRUEBA con una nota de "+notaJuan);
} else if (notaJuan >= 8) {
    console.log("Juan tiene un NOTABLE con una nota de "+notaJuan);
}

if (notaLuis < 5) {
    console.log("Luis SUSPENDE con una nota de "+notaLuis);
} else if (notaLuis > 5 || notaLuis < 7) {
    console.log("Luis APRUEBA con una nota de "+notaLuis);
} else if (notaLuis >= 8) {
    console.log("Luis tiene un NOTABLE con una nota de "+notaLuis);
}
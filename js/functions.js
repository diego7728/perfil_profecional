// alert ("FUNTION ACTIVO")
// ############# tipos de variables
// const para valores constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var days = 10;
var name = "Diego Rodriguez";
// let para variables de bloque o local
let count = 1;

// ############# formas de impresion
// alert
// alert (name);
// console.log
console.log (name);
// body - pantalla
document.write(name + "###Diego Rodriguez");
document.getElementById ("box_one").innerHTML = "<h1>diego rodriguez </h1>";
document.getElementById ("box_two").innerText = "<h1>diego rodriguez </h1>";
// librerias
// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
//   )
// Swal.fire({
//     icon:'error',
//     showConfirmButton: false,
//     title: name,
//     text: name,
//     footer: "footer" + name,
//     background: 'green',
//     position: 'top-start',
// });
// ############# tipos de datos
var number_one = 20;
var number_two = 5.5;
// Texto
var class_type = "electiva tecnica 1";
// booleanos
var boolean = true // false
// arrays - vectores
var arrays_num = [1,2,3,45,3.4,1.2];
var arrays_text = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
var arrays_mix = [1,"a", 2, "c"];
var arrays_mul = [
    {name:"diego", last_name:"rodriguez", age:"22"},
    {name:"samuel", last_name:"duarte", age:"21"},
    {name:"luis", last_name:"martinez", age:"3"},
    {name:"jose", last_name:"", age:"8"}
]

// ############# operadores basicos
// suma
var suma = number_one + number_two;
console.log("suma = " + suma);
// resta
var resta = number_one - number_two;
console.log("resta = " + resta);
// multiplicacion
var multi = number_one * number_two;
console.log("multiplicacion = " + multi);
// division
var divi = number_one / number_two;
console.log("division = " + divi.toFixed(2));
// modulo
var modulo = number_one % number_two;
console.log("modulo = " + modulo);
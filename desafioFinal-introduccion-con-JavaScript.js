/*Crea un programa que utilice console.log para 
mostrar un mensaje de bienvenida.*/
console.log('Bienvenido a nuestro curso')
/*Crea una variable llamada "nombre" y asígnale tu 
nombre. Luego, utiliza console.log para mostrar el mensaje 
"¡Hola, [tu nombre]!" en la consola del navegador.*/
let nUsuario = "Rodrigo";
console.log(`Hola, ${nUsuario}`);
/*Crea una variable llamada "nombre" y asígnale tu
nombre. Luego, utiliza alert para mostrar el mensaje
"¡Hola, [tu nombre]!".*/
let nUsuario1 = "Rodrigo";
alert(`Hola, ${nUsuario1}`);
/*Utiliza prompt y haz la siguiente pregunta: 
¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.*/
let lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguajePreferido);
/*Crea una variable llamada "valor1" y otra 
llamada "valor2", asignándoles valores numéricos de tu 
elección. Luego, realiza la suma de estos dos valores y almacena el 
resultado en una tercera variable llamada "resultado". Utiliza console.log 
para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/
let Vvalor1 = 2;
let Vvalor2 = 4;
let Rresultado = Vvalor1 + Vvalor2;
console.log(`La suma de ${Vvalor1} y ${Vvalor2} es igual a ${Rresultado}`);
/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles 
valores numéricos de tu elección. Luego, realiza la resta de estos dos valores
y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia entre 
[valor1] y [valor2] es igual a [resultado]." en la consola.*/
let VvalorUno = 4;
let VvalorDos = 3;
let Rresult = VvalorUno - VvalorDos;
console.log(`La diferencia entre ${VvalorUno} y ${VvalorDos} es igual a ${Rresult}`);
/*Pide al usuario que ingrese su edad con prompt. Con base en la edad 
ingresada, utiliza un if para verificar si la persona es mayor o menor
de edad y muestra un mensaje apropiado en la consola.*/
let edadUsuario = prompt('Ingresa tu edad por favor: ');
if (edadUsuario<=18){
    alert('Eres mayor de edad');
} else{
    alert('No eres mayor de edad');
}
/*Crea una variable "numero" y solicita un valor con prompt. Luego, 
verifica si es positivo, negativo o cero utilizando un if-else y 
muestra el mensaje correspondiente.*/
numero = prompt('Ingresa un número por favor: ');
if (numero>0){
    alert('El número es positivo');
} else if (numero<0){
    alert('El número es negativo');
} else{
    alert('El número es cero');
}
/*Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.*/
let contador = 1;
while(contador<=10){
    console.log(contador);
    contador++;
}
/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else
para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o
"Reprobado" en la consola.*/
let nota = prompt('Ingresa tu nota por favor: ');
let nAprovado = 7;
if(nota>=nAprovado){
    console.log("Aprobado");
} else{
    console.log("Reprobado");
}
/*Utiliza Math.random para generar cualquier número aleatorio y 
muestra ese número en la consola.*/
let nAleatorio = Math.random();
console.log(nAleatorio);
/*Utiliza Math.random para generar un número entero entre 1 y 10
y muestra ese número en la consola.*/
let nAleatorio1 = parseInt(Math.random()*10)+1;
console.log(nAleatorio1);
/*Utiliza Math.random para generar un número entero entre 1 y 1000
y muestra ese número en la consola.*/
let nAleatorio2 = parseInt(Math.random()*1000)+1;
console.log(nAleatorio2);
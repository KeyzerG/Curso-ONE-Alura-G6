/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".*/
let diaSemana = prompt('Bienvenido, ¿Que dia de la semana es hoy?: ');
if (diaSemana === 'Sábado' || diaSemana === 'Domingo'){
    alert ('¡Buen fin de semana!');
} else {
    alert ('¡Buena semana!');
}
/*Verifica si un número ingresado por el usuario es positivo o 
negativo. Muestra una alerta informativa.*/
let numero = prompt('Ingresa un numero por favor: ');
if (numero > 0){
    alert ('El numero es positivo');
} else if (numero < 0){
    alert ('El numero es negativo');
} else {
    alert ('El numero es cero')
}
/*Crea un sistema de puntuación para un juego. Si la puntuación es 
mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
En caso contrario, muestra "Intenta nuevamente para ganar.".*/
let puntaje = 120;
if (puntaje >= 100){
    alert ('¡Felicidades, has ganado!');
} else{
    alert ('Intenta nuevamente para ganar');
}
/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando
 un template string para incluir el valor del saldo.*/
 cantidadSaldo = 100;
 alert(`El saldo disponible en su cuenta es $${cantidadSaldo}`);
 /*Pide al usuario que ingrese su nombre mediante un 
 prompt. Luego, muestra una alerta de bienvenida usando ese nombre.*/
 nUsuario = prompt('Ingresa tu nombre porfavor:');
 alert = (`Bienvenido/a ${nUsuario}`);
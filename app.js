//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 6;

while(numeroSecreto != numeroUsuario){

    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}:`));
    console.log(typeof(numeroUsuario));

    if (numeroSecreto==numeroUsuario){
        //La condicion se cumple
        alert (`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`)
    } else{
        if (numeroUsuario>numeroSecreto){
            alert ('El numero secreto es menor');
        } else {
            alert ('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos){
            alert (`Llegaste al número maximo de ${maximosIntentos} intentos`)
            break;
        }
        //la condicion no se cumple
        //alert ('Lo siento, no acertaste el número')
    }
}
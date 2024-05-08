const opciones = ['papel', 'tijera', 'piedra'];
let jugadas = [];
let puntaje = 0;
let resultado;

const numeroJuagadas = parseInt(prompt('Cuantas veces deseas jugar?'));

for (let i = 0; i < numeroJuagadas; i++){
    let tipoJuagada = prompt('Elige una judada - (Tijera | Papel | Piedra)').toLocaleLowerCase();
    if(!opciones.includes(tipoJuagada)){
        alert('Jugada invalida');
        continue;
    }else{
        const indiceMaquina = Math.floor(Math.random() * opciones.length);
        const opcionMaquina = opciones[indiceMaquina];

        if(tipoJuagada === opcionMaquina){
            jugadas.push(`Empate - jugador elige ${tipoJuagada} y maquina elige ${opcionMaquina}`);
        }else if (
            (tipoJuagada === 'piedra' && opcionMaquina === 'tijera') ||
            (tipoJuagada === 'tijera' && opcionMaquina === 'papel') ||
            (tipoJuagada === 'papel' && opcionMaquina === 'piedra')
        ){
            puntaje += 1;
            jugadas.push(`Ganaste - jugador elige ${tipoJuagada} y maquina elige ${opcionMaquina}`);
        }else{
            puntaje -= 1;
            jugadas.push(`Perdiste - jugador elige ${tipoJuagada} y maquina elige ${opcionMaquina}`);
        }
        }
    }

 if(puntaje == 0){
    resultado = 'Jugador y Maquina empataron';
 }else if (puntaje > 0){
    resultado = 'Jugador gano';
 }else {
    resultado = 'La máquina gano';
 }
    

let renderPoint = document.getElementById('renderData');
renderPoint.innerHTML = `<p>${resultado}</p>`;

jugadas.forEach(item => {
    renderPoint.innerHTML += `<p>${item+'\n'}</p>`;
})



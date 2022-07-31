var palabras = ["DESAFIO", "ORACLE", "HTML", "JAVASCRIPT", "CSS", "ALURA"];
var letras = [];
var palabraCorrecta = "";
var puntaje = 9;
var aciertos = 0;
var tablero = document.getElementById('pantalla__juego').getContext('2d');
var permitidas = new RegExp('^[A-Z]+$');

function seleccionPalabraSecreta() {
    palabras.push(localStorage.getItem('palabraNueva'));
    var palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    return palabraSecreta
}

function dibujarGuiones() {
    tablero.LineWidth = 6;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath()

    var ancho = 600 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(460 + (ancho * i), 620)
        tablero.lineTo(510 + (ancho * i), 620)
    }

    console.log(palabraSecreta)
    tablero.stroke()
    tablero.closePath()
} dibujarGuiones(seleccionPalabraSecreta())

function letraCorrecta(index) {

    tablero.font = "bold 52px Inter";
    tablero.LineWidth = 6;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "#0A3871";

    var ancho = 600 / palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 468 + (ancho * index), 610)
}

function letraIncorrecta(letra, errorIzq) {
    tablero.font = "bold 40px Inter";
    tablero.LineWidth = 6;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "#0A3871";

    if (permitidas.test(letra)) {
        tablero.fillText(letra, 400 + (40 * (10 - errorIzq)), 710, 40)
    } else {
        alert("Ingresar Solo Letras")
    }
}

function verificarTecla(key) {

    if (letras.length < 1 || letras.indexOf(key) < 0) {
        letras.push(key)
        return false
    } else {
        letras.push(key)
        return true

    }

}

function juegoGanado() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth = 8
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "red"
    tablero.fillText("¡Felicidades!", 930, 320)
    tablero.fillText("¡Ganaste!", 930, 360)
}

function adicionarLetraCorrecta(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase()
}

function adicionarLetraIncorrecta(letter) {
    if (palabraSecreta.indexOf(letter) <= 0) {
        puntaje -= 1
    }
}

document.onkeydown = (e) => {

    let letra = e.key.toUpperCase()
    if (!verificarTecla(e.key)) {
        if (palabraSecreta.includes(letra)) {
            console.log(letra)
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    letraCorrecta(i)
                    aciertos++;
                }
            }
            if (aciertos == palabraSecreta.length) {
                juegoGanado(palabraCorrecta)

            }
        }
        else {
            if (!verificarTecla(e.key)) return
            adicionarLetraIncorrecta(letra)
            letraIncorrecta(letra, puntaje)
            dibujarAhorcado(puntaje)
        }
    }
}


function dibujarAhorcado(puntaje) {

    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"

    if (puntaje === 8) {
        tablero.moveTo(500, 500)
        tablero.lineTo(800, 500)
        tablero.moveTo(600, 500)
        tablero.lineTo(600, 100)
    }
    if (puntaje === 7) {
        tablero.moveTo(750, 100)
        tablero.lineTo(600, 100)
    }
    if (puntaje === 6) {
        tablero.moveTo(750, 100)
        tablero.lineTo(750, 171)
    }
    if (puntaje === 5) {
        tablero.moveTo(796, 227)
        tablero.arc(750, 227, 45, 0, Math.PI * 2)
    }
    if (puntaje === 4) {
        tablero.moveTo(750, 389)
        tablero.lineTo(750, 280)
    }
    if (puntaje === 3) {
        tablero.moveTo(750, 389)
        tablero.lineTo(700, 450)
    }
    if (puntaje === 2) {
        tablero.moveTo(750, 389)
        tablero.lineTo(800, 450)
    }
    if (puntaje === 1) {
        tablero.moveTo(750, 320)
        tablero.lineTo(700, 379)
    }
    if (puntaje === 0) {
        tablero.moveTo(750, 320)
        tablero.lineTo(800, 379)
    }
    tablero.stroke()
    tablero.closePath()

    if (puntaje === 0) {
        perdiste()
    }

    function perdiste() {
        tablero.font = ' bold 42px Inter';
        tablero.lineWidth = 6
        tablero.lineCap = "round"
        tablero.lineJoin = "round"
        tablero.fillStyle = "red"
        tablero.fillText("¡Perdiste!", 930, 320)
    }

}

function nuevoJuego() {
    location.reload();
}








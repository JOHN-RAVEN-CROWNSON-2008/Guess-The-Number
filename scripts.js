// Inicializar número aleatorio
let NumeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Función para validar el número ingresado por el usuario
function ValidarNumeroUsuario(event) {
    let ValorIngresadoUser = event.target.value;

    // Validar que sea un número entre 1 y 10
    if (ValorIngresadoUser < 1 || ValorIngresadoUser > 10 || isNaN(ValorIngresadoUser)) {
        alert('Please, type a valid number betwen 1 & 10.');
        event.target.value = ""; // Limpiar el input
    }
}

// Función para comparar el número ingresado con el número aleatorio
function CheckNumber() {
    let ValorIngresadoUser = document.getElementById('IngresoValorUsuario').value;

    // Validar si el campo está vacío
    if (!ValorIngresadoUser) {
        alert('Please, type a number to compare.');
        return;
    }

    // Comparar números
    if (parseInt(ValorIngresadoUser) === NumeroAleatorio) {
        alert('¡Amazing, it was correct!');
    } else {
        alert('Sorry :( Try again. The answer was: ' + NumeroAleatorio);
    }

    // Generar un nuevo número aleatorio para la próxima ronda
    NumeroAleatorio = Math.floor(Math.random() * 10) + 1;

    // Limpiar el campo de entrada
    document.getElementById('IngresoValorUsuario').value = "";
}

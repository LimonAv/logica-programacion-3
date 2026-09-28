const inputNumero = document.getElementById("numero");
const botonCalcular = document.getElementById("btnCalcular");

const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");


botonCalcular.addEventListener("click", function () {

    // Obtener el valor del input
    let valor = inputNumero.value;

    // Convertir el valor a número
    let numero = Number(valor);

    // Validar que sea un número
    if (isNaN(numero)) {

        mensaje.textContent = "Error: debes ingresar un número.";
        resultado.textContent = "";

        return;
    }

    // Validar que sea un entero
    if (!Number.isInteger(numero)) {

        mensaje.textContent = "Error: debes ingresar un número entero.";
        resultado.textContent = "";

        return;
    }

    // Validar que no sea negativo
    if (numero < 0) {

        mensaje.textContent = "Error: el número no puede ser negativo.";
        resultado.textContent = "";

        return;
    }

    // Calcular factorial
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    // Mostrar resultado
    mensaje.textContent = "Cálculo realizado correctamente.";

    resultado.textContent =
        numero + "! = " + factorial;

});
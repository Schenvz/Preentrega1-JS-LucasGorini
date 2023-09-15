// Definición de la clase Calculadora
class Calculadora {
    sumar(num1, num2) {
        return parseFloat(num1) + parseFloat(num2);
    }

    restar(num1, num2) {
        return parseFloat(num1) - parseFloat(num2);
    }

    multiplicar(num1, num2) {
        return parseFloat(num1) * parseFloat(num2);
    }

    dividir(num1, num2) {
        if (parseFloat(num2) !== 0) {
            return parseFloat(num1) / parseFloat(num2);
        } else {
            return "Error: División por cero";
        }
    }

    potenciar(num, exp) {
        return Math.pow(num, exp);
    }
}

// DOM
const calculadora = new Calculadora();

// Obtén una referencia al botón "=" por su id
const igualBoton = document.getElementById("igualBoton");

const calcularButton = document.getElementById("CalcularButton");


// Agrega un evento de clic a ambos botones para realizar la operación
calcularButton.addEventListener("click", realizarOperacion);
igualBoton.addEventListener("click", realizarOperacion);

// Función para realizar la operación seleccionada
function realizarOperacion() {
    const operacion = document.getElementById("operacion").value;
    let resultado;

    if (operacion === "raizCuadrada") {
        resultado = calculadora.raizCuadrada(
            document.getElementById("numero1").value
        );
    } else if (operacion === "raizCubica") {
        resultado = calculadora.raizCubica(
            document.getElementById("numero1").value
        );
    } else {
        const numero1 = parseFloat(document.getElementById("numero1").value);
        const numero2 = parseFloat(document.getElementById("numero2").value);

        if (!isNaN(numero1) && !isNaN(numero2)) {
            resultado = calculadora[operacion](numero1, numero2);
        } else {
            resultado = "Error: Los valores ingresados no son números";
        }
    }

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}
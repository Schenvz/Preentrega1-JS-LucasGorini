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

// Crear una instancia de la clase Calculadora
const calculadora = new Calculadora();

// Definición de la función realizarOperacion
function realizarOperacion() {
    // Obtener los valores de los campos de entrada y la operación seleccionada
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacion = document.getElementById("operacion").value.toLowerCase(); // Convertir a minúsculas

    try {
        // Realizar la operación utilizando la calculadora
        const resultado = calculadora[operacion](numero1, numero2);

        // Mostrar el resultado en el elemento con id "resultado"
        mostrarResultado(resultado);
    } catch (error) {
        // Manejar errores y mostrar mensajes de error en caso de excepciones
        mostrarError(error.message);
    }
}

function mostrarResultado(resultado) {
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = `El resultado es: ${resultado}`;
}

function mostrarError(mensaje) {
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = `Error: ${mensaje}`;
}

// Obtén una referencia al botón por su id
const calcularButton = document.getElementById("calcularButton");

// Agrega un evento de clic al botón
calcularButton.addEventListener("click", realizarOperacion);

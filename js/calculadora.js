// Definición de la clase Calculadora
class Calculadora {
    // Método para sumar dos números
    sumar(num1, num2) {
        return parseFloat(num1) + parseFloat(num2);
    }

    // Método para restar dos números
    restar(num1, num2) {
        return parseFloat(num1) - parseFloat(num2);
    }

    // Método para multiplicar dos números
    multiplicar(num1, num2) {
        return parseFloat(num1) * parseFloat(num2);
    }

    // Método para dividir dos números
    dividir(num1, num2) {
        if (parseFloat(num2) !== 0) {
            return parseFloat(num1) / parseFloat(num2);
        } else {
            return "Error: División por cero";
        }
    }
}

// Instancia de la clase Calculadora
const calculadora = new Calculadora();

// Referencia al botón por su ID
const calcularButton = document.getElementById("calcularButton");

// Funciones

// Función para cambiar la operación seleccionada
function cambiarOperacion(simbolo) {
    // Obtener el select de operación
    const operacionSelect = document.getElementById("operacion");

    // Cambiar la opción seleccionada en el select
    switch (simbolo) {
        case '+':
            operacionSelect.value = 'sumar';
            break;
        case '-':
            operacionSelect.value = 'restar';
            break;
        case '*':
            operacionSelect.value = 'multiplicar';
            break;
        case '/':
            operacionSelect.value = 'dividir';
            break;
    }
}

// Función para realizar la operación seleccionada
function realizarOperacion() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacion = document.getElementById("operacion").value;

    // Verificar si los números son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        // Mostrar un mensaje de error utilizando SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese números válidos.'
        });
        return;
    }

    try {
        let resultado;
        if (operacion === "raizCuadrada" || operacion === "raizCubica") {
            resultado = calculadora[operacion](numero1);
        } else {
            resultado = calculadora[operacion](numero1, numero2);
        }
        
        // Mostrar el resultado utilizando SweetAlert2
        Swal.fire({
            icon: 'success',
            title: 'Resultado',
            text: `Resultado: ${resultado}`
        });
    } catch (error) {
        // Mostrar un mensaje de error utilizando SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Error: ${error.message}`
        });
    }
}

// Función para borrar los valores en los campos de entrada y la pantalla de resultado con confirmación
function borrarPantalla() {
    // Verificar si los campos tienen valores antes de mostrar el mensaje de confirmación
    if (
        document.getElementById("numero1").value !== "" ||
        document.getElementById("numero2").value !== ""
    ) {
        // Mostrar un mensaje de confirmación utilizando SweetAlert2
        Swal.fire({
            title: '¿Desea guardar los cambios?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'No guardar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
            } else {
            borrarCampos();
            Swal.fire('Números borrados', '', 'error');
            }
        });
    }
}

// Mostrar el historial de operaciones en el div 
function mostrarHistorial() {
    historialDiv.innerHTML = "<h3>Historial de Operaciones:</h3>";
    historialOperaciones.forEach((operacion, index) => {
        historialDiv.innerHTML += `<p>${index + 1}: ${operacion}</p>`;
    });
}

// Función para borrar los valores en los campos de entrada y la pantalla de resultado
function borrarCampos() {
    const numero1Input = document.getElementById("numero1");
    const numero2Input = document.getElementById("numero2");
    const resultadoElement = document.getElementById("resultado");

    numero1Input.value = "";
    numero2Input.value = "";
    resultadoElement.textContent = "";
}

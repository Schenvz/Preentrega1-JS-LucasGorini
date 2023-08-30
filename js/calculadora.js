//la clase no es necesaria, solo la uso para repasar POO
//Definición de la clase Calculadora con métodos para operaciones matemáticas
class Calculadora {
    sumar(num1, num2) {
        return parseFloat(num1) + parseFloat(num2);
    }
    restar(num1, num2) {
        return parseFloat(num1) - parseFloat(num2);
    }
    dividir(num1, num2) {
        if (parseFloat(num2) !== 0) {
            return parseFloat(num1) / parseFloat(num2);
        } else {
            return "Error: División por cero";
        }
    }
    multiplicar(num1, num2) {
        return parseFloat(num1) * parseFloat(num2);
    }
    potenciar(num, exp) {
        return Math.pow(num, exp);
    }
    raizCuadrada(num) {
        return Math.sqrt(parseFloat(num));
    }
    raizCubica(num) {
        return Math.cbrt(parseFloat(num));
    }
}

//creo una instancia de la clase Calculadora
const calculadora = new Calculadora();
//objeto que mapea números a operaciones
const operaciones = {
    1: "sumar",
    2: "restar",
    3: "dividir",
    4: "multiplicar",
    5: "potenciar",
    6: "raizCuadrada",
    7: "raizCubica"
};

const historial = []; // Array para almacenar el historial de operaciones

let continuar = true;

while (continuar) {
    try {
        const operacionInput = prompt("¿Qué operación deseas realizar?\n" +
            "1: suma, 2: resta, 3: división, 4: multiplicación, 5: potenciación, 6: raíz cuadrada, 7: raíz cúbica");

        if (operacionInput === null) {
            throw new Error("Operación cancelada");
        }

        const operacion = parseInt(operacionInput);

        if (isNaN(operacion) || !(operacion in operaciones)) {
            throw new Error("Operación no válida");
        }

        const numero1Input = prompt(`Primer número para ${operaciones[operacion]}`);

        if (numero1Input === null) {
            throw new Error("Operación cancelada");
        }

        const numero1 = parseFloat(numero1Input);

        let resultado;
        let numero2 = null;

        if (operacion !== 6 && operacion !== 7) {
            const numero2Input = prompt(`Segundo número para ${operaciones[operacion]}`);

            if (numero2Input === null) {
                throw new Error("Operación cancelada");
            }

            numero2 = parseFloat(numero2Input);
        }

        resultado = calculadora[operaciones[operacion]](numero1, numero2);

        // Agregar la operación y su resultado al historial
        historial.push({
            operacion: operaciones[operacion],
            numeros: [numero1, numero2],
            resultado: resultado
        });

        alert(`Tu resultado es ${resultado}`);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }

    const decision = prompt("¿Deseas realizar otra operación? (Sí / No)").toLowerCase();
    if (decision !== "sí" && decision !== "si") {
        continuar = false;
    }
}

// Mostrar el historial de operaciones al final
console.log("Historial de operaciones:");
for (const operacion of historial) {
    console.log(`${operacion.operacion}: ${operacion.numeros.join(', ')} = ${operacion.resultado}`);
}

alert("Gracias por utilizar nuestra calculadora!!");

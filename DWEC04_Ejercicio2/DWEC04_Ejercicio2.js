/* Define una clase que permita crear objetos de tipo banco con las siguientes características:
(6) Un atributo nombre que pasaremos como parámetro al crear el objetos.

El objeto permitirá gestionar cuentas (de 5 dígitos del 000001 al 599999) y el saldo de las cuentas, 
para lo que utilizaremos los siguientes métodos:
    (7) Crear cuenta: Recibe como parámetros el código de cuenta y el saldo inicial (por defecto tomará el 
    valor 0 si no se pasa el parámetro). 
    (8) Actualizar cuenta: Recibe como parámetros el código de cuenta y el ingreso (o extracción en negativo) 
    y actualiza el saldo de la cuenta. Mostrará error si la cuenta no existe. 
    (9) Eliminar cuenta: Recibe como parámetro el código de cuenta y la elimina. Mostrará error si la cuenta
    no existe o si no tiene saldo 0, indicando cada caso. 
    (10) Listar cuentas: Escribe en el documento el nombre del banco y la lista de cuentas con sus saldos de 
    forma similar a la mostrada en la imagen siguiente. 

Realiza 3 llamadas al método para crear cuentas, y una llamada a cada uno de los otros métodos para demostrar su funcionamiento.*/

document.addEventListener("DOMContentLoaded", function () {
    //FUNCIÓN PARA COMPROBAR NÚMERO DE CUENTA
    function validarCuenta(codigo) {
        let codigoCuenta = String(codigo); //Convertir el codigo a string
        let numero = parseInt(codigoCuenta); //convertir el codigo a número

        if (!/^\d{6}$/.test(codigoCuenta)) { //(Uso de expresión regular) Si el código no contiene 6 dígitos
            console.log("Error: Formato de código de cuenta incorrecto.");
            return;
        }

        else if (numero < 1 || numero > 599999) { //Si el código no está entre 000001 y 599999
            console.log("Error: Código de cuenta erróneo.");
            return;
        }

        else { //Si no se cumple las dos anteriores, se devuelve el código
            return codigoCuenta;
        }
    }

    class Banco { //Declaración clase Banco
        //APARTADO 6
        /*El constructor recibe el nombre del banco y crea un objeto llamado cuentas para 
        guardar las cuentas del banco*/
        constructor(nombre) {
            this.nombre = nombre;
            this.cuentas = {};
        }

        //APARTADO 7
        crearCuenta(codigo, saldo = 0) { //Método crearCuenta que recibe el código de la cuenta y el saldo inicial, que por defecto es 0.
            /*Se valida el código de cuenta usando la función validarCuenta anterior. 
            Si el código no es válido, sale del método*/
            let codigoCuenta = validarCuenta(codigo);
            if (!codigoCuenta) {
            }

            else if (codigoCuenta in this.cuentas) { //Se comprueba si el código introducido está ya en cuentas
                console.log("La cuenta ya existe."); //Si está, no se puede crear la cuenta porque ya existe una con ese código
            }
            else {
                this.cuentas[codigoCuenta] = saldo; //Si el código es válido y no existe ya la cuenta, se crea la cuenta en el objeto cuentas con el saldo inicial
            }
        }

        //APARTADO 8
        actualizarCuenta(codigo, importe) { //Método actualizarCuenta que recibe el codigo de cuenta y el importe (negativo o positivo)
            /*Se valida el código de cuenta usando la función validarCuenta anterior. 
            Si el código no es válido, sale del método*/
            let codigoCuenta = validarCuenta(codigo);
            if (!codigoCuenta) {
                return;
            }

            else if (!(codigoCuenta in this.cuentas)) { //Se comprueba si el código de cuenta introducido no está en cuentas
                console.log("Error: La cuenta no existe."); //Si no está, es porque la cuenta no existe
                return;
            }

            /*Primero, se almacena el saldo actual, que está en el objeto cuentas, en la cuenta a la que pertenece 
            el código introducido.
            Después, en la variable nuevoSaldo, se suma el saldo anterior que estaba almacenado más el importe nuevo que
            se ha introducido.*/
            let saldoActual = this.cuentas[codigoCuenta];
            let nuevoSaldo = saldoActual + importe;

            /*Si nuevoSaldo es menor que cero, no permite retirar importe. Es decir, si el importe introducido de extracción
            es superior al saldo que había en la cuenta*/
            if (nuevoSaldo < 0) {
                console.log("Error: Importe a retirar superior a saldo disponible.");
                return;
            }
            else {
                //Se actualiza el saldo de la cuenta
                this.cuentas[codigoCuenta] = nuevoSaldo;
            }
        }

        //APARTADO 9
        eliminarCuenta(codigo) { //Método eliminarCuenta que recibe el código de una cuenta
            /*Se valida el código de cuenta usando la función validarCuenta anterior. 
            Si el código no es válido, sale del método*/
            let codigoCuenta = validarCuenta(codigo);
            if (!codigoCuenta) {
                return;
            }
            else if (!(codigoCuenta in this.cuentas)) { //Se comprueba si el código de cuenta introducido no está en cuentas
                console.log("Error: La cuenta no existe"); //Si no está, es porque la cuenta no existe
                return;
            }
            else { //Si el código de cuenta es válido y la cuenta existe
                if (this.cuentas[codigoCuenta] !== 0) { //Si el saldo de la cuenta es distinto de cero, no se puede eliminar la cuenta
                    console.log("Error: La cuenta tiene saldo distinto de 0.");
                }
                else { //Si el saldo de la cuenta es cero, se elimina la cuenta
                    delete this.cuentas[codigoCuenta];
                }
            }
        }

        //APARTADO 10
        mostrarCuentas() { //Método mostrarCuentas
            let contenedor = document.getElementById("texto"); //con document.getElementById accedemos al elemento del HTML con el id indicado (texto)
            contenedor.innerHTML = `<h3>${this.nombre}</h3><p>______________</p>`; //Con innerHTML se puede escribir contenido HTML dentro del elemento que se indica (contenedor)

            for (let codigo in this.cuentas) { //Bucle que recorre todas las propiedades de cuentas (códigos de cuentas y saldo)
                //Para cada cuenta, se extrae el código y el saldo y se escribe con innerHTML dentro del contenedor
                contenedor.innerHTML += `${codigo} - ${this.cuentas[codigo]} €<br>`;
            }
        }
    }

    /*COMPROBACIONES*/
    let bancoCristina = new Banco("BancoCristina");
    //APARTADO 7
    bancoCristina.crearCuenta("123456", 100);
    bancoCristina.crearCuenta("111111");
    bancoCristina.crearCuenta("787878", 50);
    bancoCristina.crearCuenta("12345");

    //APARTADO 8
    bancoCristina.actualizarCuenta("123456", -10);
    bancoCristina.actualizarCuenta("111111", 300);
    bancoCristina.actualizarCuenta("123456", -200);

    //APARTADO 9
    bancoCristina.eliminarCuenta("111111");

    //APARTADO 10
    bancoCristina.mostrarCuentas();
});





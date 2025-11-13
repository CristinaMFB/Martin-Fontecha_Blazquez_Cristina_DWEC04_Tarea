let articulos = [
    { "codigo": 1, "descripcion": "mouse Inalámbrico", "precio": 25.99, "tipo": "Periféricos" },
    { "codigo": 2, "descripcion": "teclado Mecánico", "precio": 49.99, "tipo": "Periféricos" },
    { "codigo": 3, "descripcion": "Monitor 24 pulgadas", "precio": 179.99, "tipo": "Electrónica" },
    { "codigo": 4, "descripcion": "Disco duro externo 1TB", "precio": 89.99, "tipo": "Electrónica" },
    { "codigo": 5, "descripcion": "Auriculares con micrófono", "precio": 34.99, "tipo": "Periféricos" },
    { "codigo": 6, "descripcion": "Cable HDMI 2m", "precio": 12.99, "tipo": "Accesorios" },
    { "codigo": 7, "descripcion": "Cargador USB-C", "precio": 19.99, "tipo": "Accesorios" },
    { "codigo": 8, "descripcion": "lámpara LED de escritorio", "precio": 29.99, "tipo": "Mobiliario" },
    { "codigo": 9, "descripcion": "Silla ergonómica", "precio": 199.99, "tipo": "Mobiliario" },
    { "codigo": 10, "descripcion": "webcam Full HD", "precio": 69.99, "tipo": "Electrónica" },
    { "codigo": 11, "descripcion": "Tarjeta de memoria 128GB", "precio": 24.99, "tipo": "Accesorios" },
    { "codigo": 12, "descripcion": "Base para laptop ajustable", "precio": 39.99, "tipo": "Mobiliario" },
    { "codigo": 13, "descripcion": "Router WiFi 6", "precio": 129.99, "tipo": "Electrónica" },
    { "codigo": 14, "descripcion": "Impresora multifuncional", "precio": 249.99, "tipo": "Electrónica" },
    { "codigo": 15, "descripcion": "smartwatch deportivo", "precio": 59.99, "tipo": "Electrónica" },
    { "codigo": 16, "descripcion": "Cámara de seguridad inalámbrica", "precio": 99.99, "tipo": "Electrónica" },
    { "codigo": 17, "descripcion": "Micrófono de condensador", "precio": 74.99, "tipo": "Periféricos" },
    { "codigo": 18, "descripcion": "Controlador MIDI", "precio": 119.99, "tipo": "Periféricos" },
    { "codigo": 19, "descripcion": "altavoz Bluetooth Portátil", "precio": 45.99, "tipo": "Electrónica" },
    { "codigo": 20, "descripcion": "Kit de herramientas para PC", "precio": 18.99, "tipo": "Accesorios" }
  ]

/*APARTADO 1.
Escribe una función que reciba como parámetro el array de artículos, 
un tipo de artículo (por ejemplo, "Electrónica") y un precio máximo. 
La función debe devolver un array con todos los artículos que pertenezcan 
a ese tipo y tengan un precio menor o igual al especificado.*/

function funcion1 (articulos, tipoArticulo, precioMaximo) { //Función que recibe como parámetro el array articulos, tipoArticulo y precioMaximo
    /*Uso filter para recorrer el array articulos, se devuelven los articulos cuyo tipo sea igual a tipoArticulo y 
    cuyo precio sea menor que el precioMaximo. Esto se almacena en un nuevo array busquedaArticulos*/
    let busquedaArticulos = articulos.filter(articulo =>
         articulo.tipo === tipoArticulo && articulo.precio <= precioMaximo
    );
    //Se devuelve el nuevo array con los articulos encontrados
    return busquedaArticulos;
}

/*APARTADO 2.
Escribe una función que reciba como parámetro el array de artículos y 
modifique las descripciones de los artículos para que todas las descripciones 
comiencen con mayúsculas y el resto de las letras estén en minúsculas. 
La función debe devolver el array modificado.*/

function funcion2 (articulos) { //Función que recibe únicamente el array articulos
    /*Uso map para recorrer y transformar cada artículo.*/
    let descripcionModificada = articulos.map(articulo => { 
        //Se almacena la descripción del articulo correspondiente en minúscula
        let descripcionMinus = articulo.descripcion.toLowerCase();
        //Se almacena la primera letra de la descripción del artículo correspondiente en mayúscula
        let descripcionInicial = descripcionMinus.charAt(0).toUpperCase();
        //Se concatena la primera letra mayúscula y el resto de la descripción en minúsculas. Uso slice para concatenar solo las minúsculas a partir del segundo caracter
        let descripcionFinal = descripcionInicial + descripcionMinus.slice(1);
        //Se actualiza la propiedad descripcion del artículo
        articulo.descripcion = descripcionFinal;
        //Se devuelve el artículo modificado
        return articulo;
    });
    //Se devuelve el array completo con las descripciones cambiadas
    return descripcionModificada;
}

/*APARTADO 3.
Escribe una función que reciba como parámetro el array de artículos y una cadena. 
La función debe devolver un array con los artículos que tienen esa cadena en la descripción.*/
function funcion3(articulos, cad) { //Función que recibe el array articulos y una cadena
    /*Uso filter de nuevo, para recorrer el array y buscar los artículos que contengan la cadena "cad" en su descripción.*/
    //En este caso, uso también includes para seleccionar las descripciones que contengan "cad", además de convertir tanto la descripción como cad a minúsculas para que coincidan
   let buscarCadena = articulos.filter(articulo => {
    return articulo.descripcion.toLowerCase().includes(cad.toLowerCase());
   });

   //Si no se encuentra nada, es porque no coincide ninguna descripción
   if(buscarCadena.length === 0) {
    return "No se han encontrado coincidencias.";
   }
   //Se devuelve el array nuevo con los artículos que coinciden
    return buscarCadena;
}

/*APARTADO 4.
Escribe una función que recibe como parámetro el array y un tipo de artículo, 
y devuelve un objeto con dos atributos; cantidad y preciomedio. que contendrán 
la cantidad y el precio medio de los artículos de ese tipo.

Ejemplo de parámetro: "Electrónica"
Ejemplo de salida: { "cantidad": 8, "preciomedio": 113.74 }*/
function funcion4(articulos, tipoArticulo) { //Función que recibe el array articulos y tipoArticulo
    //Uso de nuevo filter para buscar dentro de cada artículo, los que su tipo coincide con el tipoArticulo indicado
    let articulosTipo = articulos.filter(articulo => {
        return articulo.tipo === tipoArticulo;
    });
    //La cantidad de artículos es igual a la longitud de articulosTipo 
    let cantidad = articulosTipo.length;

    //Uso reduce para sumar los precios de los artículos. Introduzco suma, que comienza en cero, para ir sumando todos los precios.
    let sumaTotal = articulosTipo.reduce((suma, articulo) => {
        return suma + articulo.precio;
    }, 0);

    //Si la cantidad de artículos es mayor que cero, se hace la media y se almacena en una variable, con dos decimales
    if (cantidad > 0) {
        precioMedio = (sumaTotal/cantidad).toFixed(2);
    }
    //Si la cantidad de artículos es cero, es porque no se han encontrado artículos
    else {
        return "No hay artículos de este tipo.";
    }

    //Se devuelve un objeto con la cantidad y el precio medio de los artículos que coinciden con ese tipo
    return {
        cantidad, 
        precioMedio
    };
}

/*APARTADO 5.
Escribe una función que reorganice el array de artículos según el precio, 
en orden ascendente o descendente (según un parámetro de entrada).*/
function funcion5(articulos, ordenar) { //Función que recibe el array articulos y ordenar
    let copiaArticulos = articulos.slice(); //Uso slice para crear una copia del array articulos
    let orden = ordenar.toLowerCase(); //Uso la variable orden para almacenar la cadena que se ha introducido como parámetro en minúsculas, para que no importe si está en minúsculas o no
    let resultadoOrdenado;

    /*En ambos casos uso sort, que es un método para ordenar elementos. Como quiero ordenar por número (de mayor a menor o de menor a mayor),
    uso una función de comparación.*/
    if (orden === "asc" || orden === "ascendente") {
        /*Se hace la resta de los precios.
        - Si el resultado es negativo, el primer artículo va antes que el segundo.
        - Si el resultado es positivo, el segundo artículo va antes que el primero.
        - Si es 0, no se cambia el orden.*/
        resultadoOrdenado = copiaArticulos.sort((a, b) => a.precio - b.precio);
    }
    else if (orden === "desc" || orden === "descendente") {
        /*Se hace la resta de los precios.
        - Si el resultado es negativo, el segundo artículo va antes que el primero.
        - Si el resultado es positivo, el primer artículo va antes que el segundo.
        - Si es 0, no se cambia el orden.*/
        resultadoOrdenado = copiaArticulos.sort((a, b) => b.precio - a.precio);
    }
    //Si el parámetro de ordenar no coincide con ninguna opción, se indica que no es válido.
    else {
        return "Error. Orden no válido.";
    }
    //Se devuelve el array ordenado
    return resultadoOrdenado;
}

/*COMPROBACIONES*/
console.log("Función 1. Buscando artículos de electrónica y precio máximo 100.");
console.log(funcion1(articulos, "Electrónica", 100));
console.log("Función 2. Descripción primera en mayúiscula y resto en minúsculas.");
console.log(funcion2(articulos));
console.log("Función 3. Cadena: HDMI");
console.log(funcion3(articulos, "HDMI"));
console.log("Función 3. Una cadena que NO se encuentre en ninguna descripción.");
console.log(funcion3(articulos, "Cristina Martín"));
console.log("Función 4. Tipo de artículo: Electrónica.");
console.log(funcion4(articulos, "Electrónica"));
console.log("Función 5. Orden ascendente.");
console.log(funcion5(articulos, "asc"));
console.log("Función 5. Orden descendente.");
console.log(funcion5(articulos, "descendente"));
console.log("Función 5. Orden erróneo.");
console.log(funcion5(articulos, "Cristina Martín"));



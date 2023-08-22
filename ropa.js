function calcular_precio(precio, cuotas) {
    precio = parseFloat(precio);
    cuotas = parseInt(cuotas);
    let precio_final = 0;

    if (cuotas === 1 && precio > 0) {
        return precio;
    } else if (cuotas === 3 && precio > 0) {
        precio_final = precio + precio * 0.25;
        return precio_final;
    } else if (cuotas === 6 && precio > 0) {
        precio_final = precio + precio * 0.55;
        return precio_final;
    } else if (cuotas === 9 && precio > 0) {
        precio_final = precio + precio * 0.80;
        return precio_final;
    } else if (cuotas === 12 && precio > 0) {
        precio_final = precio + precio * 1;
        return precio_final;
    }
}

function descuento(preciofinal, esta_registrado) {
    if (esta_registrado === "SI") {
        let descuento_socio = preciofinal - preciofinal * 0.20;
        return descuento_socio;
    } else {
        return 0;
    }
}

console.log("Bienvenidos/as a tienda de ropa MEX");

let precio = 0;

while (precio !== "FIN") {
    precio = prompt("Ingrese el precio total de la/las prenda/s que desea adquirir o FIN");
    if (precio !== "FIN") {
        let cuotas = prompt("Ingrese la cantidad de cuotas: 1, 3, 6, 9 y 12");
        let esta_registrado = prompt("Esta registrado: SI o NO");

        let resultado_de_la_compra = calcular_precio(precio, cuotas);
        let resultado_del_descuento = descuento(resultado_de_la_compra, esta_registrado);

        console.log("Gastaste: ", parseFloat(precio));
        console.log("Cuotas: ", cuotas);
        console.log("Pagas: ", resultado_de_la_compra);

        if (resultado_de_la_compra !== 0) {
            console.log("Con descuento del 20% por estar registrado pagas: ", resultado_del_descuento);
        }
    } else {
        console.log("Muchas gracias");
    }
}

   

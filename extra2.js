var s = 20
var d = 25
var t = 28

var cantidad_1 = parseInt(prompt("Cuantas hamburguesas simples quiere comprar"));
var cantidad_2 = parseInt(prompt("Cuantas hamburguesas dobles quiere comprar"));
var cantidad_3 = parseInt(prompt("Cuantas hamburguesas triples quiere comprar"));
var pago = prompt("Ingrese el metodo de pago (tarjeta/efectivo)");

if (pago == "tarjeta") {
    let total = (cantidad_1 * s) + (cantidad_2 * d) + (cantidad_3 * t);
    let cargo = (total * 0.05) + total;
    alert("El costo total es de: $" + cargo);
} else {
    let total = (cantidad_1 * s) + (cantidad_2 * d) + (cantidad_3 * t);

    alert("El costo total es de: " + total);
}
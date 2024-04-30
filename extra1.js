var num_1 = parseInt(prompt("Ingrese el primer numero"));
var num_2 = parseInt(prompt("Ingrese el segundo numero"));
var aux = 0;
var resultado = 0;
if (num_2 < num_1) {
    aux = num_1;
    num_1 = num_2;
    num_2 = aux;
}
for (var i = num_1; i <= num_2; i++) {
    console.log("Tabla de " + i);

    for (var m = 0; m <= 10; m++) {
        resultado = i * m
        console.log(i + " x " + m + " = " + resultado);
    }

}
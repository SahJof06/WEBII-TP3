var a = parseInt(prompt("Ingrese el primer valor numerico."));
var b = parseInt(prompt("Ingrese el segundo valor numerico"));
var acum = 0;
var cont = 0;


while (b>=a) {
    console.log(a);
    acum = acum + a;
    cont++;
    a++;
}



console.log("la cantidad de numeros que hay entre el primer número y el segundo es: " + cont);
console.log("La suma de todos los numeros entre el primer número y el segundo es: " + acum);

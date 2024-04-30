var num = 2;
var acum = 0;

while(num <= 100){
    acum = acum+num;
    console.log(num);
    num= num +2;
    
}
console.log("La suma de todos los numeros es: "+acum);
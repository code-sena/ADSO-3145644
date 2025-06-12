alert("Hola mundo");
var n = 4;

alert("El valor de n es: " + n);

// Saber si una persona es mayor de edad
var edad = prompt("Introduce tu edad: ");

if (edad<=0 || edad>120) {
    alert("Edad no válida");
}else{
    if(edad>=18){
        alert("Eres mayor de edad");
    }else{
        alert("Eres menor de edad");
    }
}
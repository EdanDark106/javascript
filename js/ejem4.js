var x, d, s;
x = parseInt(prompt("Ingrese un número: "));
s = 0;

while (x !== 0) {
    d = x % 10;
    x = Math.floor(x / 10);
    s = s + d;
}

alert("La suma de los dígitos es: " + s);
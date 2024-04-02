var n, a, b, c;

n = parseInt(prompt("Ingrese el valor de n:"));
a = -1;
b = 1;

for (var i = 1; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    document.write("<font size='30' color='red'>" + c + "</font>");
}
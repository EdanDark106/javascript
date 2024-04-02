var nom, anio,edad;
nom=prompt("nombre: ");
anio=parseInt(prompt("ingrese su año de nacimiento"));
edad=2024-anio;
if(edad>=10)
{
    document.write(nom"estas hablitiado");
}
else
{
    document.write(nom" no estas hablitiado");

}
dia=parseInt(prompt("ingrese un dia de la semana enter 1 y 7":));
switch(dia)
{
    case 1: alert("lin");break;
    case 2: alert("mart");break;
    case 3: alert("mier");break;
    case 4: alert("juev");break;
    case 5: alert("vier");break;
    case 6: alert("sab");break;
    case 7: alert("dom");break;
    default: alert("fuera de rango");
}
function mostrar()
{
var dia;
var anuncio;

dia=prompt("ingrese un día de la semana");

switch (dia) 
{
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        anuncio="a trabajar";
        break;
    case "sabado":
    case "domingo":
        anuncio="buen finde";
        break;
    default:
        anuncio="dia inválido";
        break;
}
    alert(anuncio)
}

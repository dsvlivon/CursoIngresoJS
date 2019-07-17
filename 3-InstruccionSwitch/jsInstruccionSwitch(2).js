function mostrar()
{
//tomo la edad  
var mesDelAño;
var anuncio;

mesDelAño= document.getElementById("mes").value;

switch(mesDelAño) 
{

    case "Enero":
    case "Febrero":
    case "Marzo":
        anuncio= "Falta para el invierno. Es Verano.";
        break;
    case "Abril":
    case "Mayo":
    case "Junio":
        anuncio= "Falta para el invierno. Es Otoño.";
        break;
    case "Julio":
    case "Agosto":
        anuncio="Abrigate que hace frío. Es Invierno.";
        break;
    
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        anuncio= "Ya pasamos el frio, ahora calor!!!. Es Primavera.";
        break;
        
}

alert(anuncio);

}//FIN DE LA FUNCIÓN
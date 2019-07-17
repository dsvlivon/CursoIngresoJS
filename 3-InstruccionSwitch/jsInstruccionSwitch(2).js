function mostrar()
{
//tomo la edad  
var mesDelAño 

mesDelAño= document.getElementById("mes").value;

switch(mesDelAño) {

    case "Enero":
    case "Febrero":
    case "Marzo":
        alert("Falta para el invierno. Es Verano.");
        break;
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno. Es Otoño.");
        break;
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frío. Es Invierno.");
        break;
    
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert("Ya pasamos el frio, ahora calor!!!. Es Primavera.");
        break;
        
}


}//FIN DE LA FUNCIÓN
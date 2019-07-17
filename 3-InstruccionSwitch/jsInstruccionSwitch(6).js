function mostrar()
{
    alert("Ingresar la hora siguiendo el formato 00:00 de 24hs.");
    
    //tomo la edad  
    var laHora = document.getElementById('hora').value;

switch (laHora) 
{ 
    case "07:00":
    case "08:00":
    case "09:00":
    case "10:00":
    case "11:00":
        alert("Es de mañana.");
        break;
        
    case "12:00":
    case "13:00":
    case "14:00":
    case "15:00":
    case "16:00":
    case "17:00":
    case "18:00":
    case "19:00":
            alert("Es de tarde.");
            break;
    
    case "20:00":
    case "21:00":
    case "22:00":
    case "23:00":
    case "24:00":
    case "00:00":
    case "01:00":
    case "02:00":
    case "03:00":
    case "04:00":
    case "05:00":
    case "06:00":
        alert("Es de noche.");
        break;
    
    default:
        alert("Ingresó mal la hora.")
        break;
}


}//FIN DE LA FUNCIÓN
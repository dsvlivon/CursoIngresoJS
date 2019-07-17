function mostrar()
{
//tomo la edad  
    var mes;
    var anuncio;    

    mes= document.getElementById("mes").value;

    switch(mes) 
    {
    case "Enero":
        anuncio= "Que comiences bien el año!!!";
        break;
    case "Marzo":
        anuncio= "A clases!!!";
        break;
    case "Julio":
        anuncio= "Se vienen las vacaciones!!!";
        break;
    case "Diciembre":
    default:
        anuncio= "Felices Fiestas!!!";
        break;
    }
    alert(anuncio);

}//FIN DE LA FUNCIÓN

    

    
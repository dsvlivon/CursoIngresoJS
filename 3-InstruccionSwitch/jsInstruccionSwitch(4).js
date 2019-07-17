function mostrar()
{
//tomo la edad  
    var mesDelAño;
    var anuncio;

    mesDelAño= document.getElementById('mes').value;

    switch (mesDelAño) 
    {
        case "Febrero":
            anuncio="Este mes no tiene más de 28 días.";
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            anuncio= "Este mes tiene 30 días.";
            break;
        default:
            anuncio= "Este mes tiene 31 días.";
            break;

    }

    alert(anuncio);

}//FIN DE LA FUNCIÓN//

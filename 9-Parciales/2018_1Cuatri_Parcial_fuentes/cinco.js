function mostrar()
{
    var planeta
    var anuncio

    planeta= prompt("Ingrese un planeta");

    switch(planeta) 
        {
        case "tierra":
                anuncio= "Aca vivimos";
            break;
        case "mercurio":
        case "venus":
                anuncio= "aca hace mas calor";
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
                anuncio= "aca hace mas frio";
            break;
        default:
            anuncio= "El planeta ingresado es inválido.";
        break;
        }
        alert(anuncio);

}

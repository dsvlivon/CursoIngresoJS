    function mostrar()

    {
        //tomo la edad  
        var laHora;
        var anuncio;

        laHora = document.getElementById('hora').value;

    //alert (laHora);
        
        switch (laHora) 
        {
            case "7":
            case "8":
            case "9":
            case "10":
            case "11":
                anuncio= "Es de mañana";
                break;
            default:
                anuncio= "Ingresó mal la hora.";
                break;
        }

        alert(anuncio);

}//FIN DE LA FUNCIÓN
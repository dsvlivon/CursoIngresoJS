function mostrar()
{
//tomo la edad  

    var etario;
    var civil;

        etario= document.getElementById("edad").value;
        etario= parseInt(etario);

        civil= document.getElementById("estadoCivil").value;    

        if (etario> 17) {
            alert("Ok")
        } else if (civil !="Soltero") {
            alert("Es muy pequeño/a para NO ser soltero/a.")
        } else {
            alert("Ok")
        }

       

}//FIN DE LA FUNCIÓN
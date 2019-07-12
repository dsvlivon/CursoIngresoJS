function mostrar()
{
//tomo la edad  

    var etario;
    var civil;

        etario= document.getElementById("edad").value;
        etario= parseInt(etario);

        civil= document.getElementById("estadoCivil").value;    

        if (etario<17) {
            
        } else if (civil !="Soltero") {
            
        } else {
            alert("Es soltero y no es menor.")
        }


}//FIN DE LA FUNCIÓN
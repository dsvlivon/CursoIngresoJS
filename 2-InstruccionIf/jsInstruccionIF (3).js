function mostrar()
{
//tomo la edad  
    var etario

    etario= document.getElementById("edad").value;

    etario= parseInt(etario);

    if (etario>=18) {
        alert("Usted ya es mayor de edad");
        console.log("Usted ya es mayor de edad");
    } else {
        alert("Usted aún no es mayor de edad");
        console.log("Usted aún no es mayor de edad");   
    }
}//FIN DE LA FUNCIÓN
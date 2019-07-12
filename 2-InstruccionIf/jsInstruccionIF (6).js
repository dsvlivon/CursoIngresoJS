function mostrar()
{
//tomo la edad  

    var etario;

    etario= document.getElementById("edad").value;

    etario= parseInt(etario);

/*switch(etario) {

   case 1:
        alert("Usted es un adolescente.");
    break;
    case 2:
        alert("Usted es un adolescente.");
    break;
    case 3:
        alert("Usted es un adolescente.");
    break;
    case 4:
        alert("Usted es un adolescente.");
    break;
    case 5:
        alert("Usted es un adolescente.");
    break;       
    }*/      

        if (etario <=12) {
            alert("Usted es un niño/a");
        } else if (etario >=18) {
            alert("Usted es un adulto/a");
        } else {
            alert("Usted es un adolecente")
        }

}//FIN DE LA FUNCIÓN
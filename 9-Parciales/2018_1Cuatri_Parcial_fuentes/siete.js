function mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var contador;
    var notasuma;
    
    notasuma=0;

    for (contador=0; contador<2; contador=contador+1) 
        {
        nota= prompt("Introduzca la nota.");
        nota=parseInt(nota);
            
            while (nota<0 || nota >10)
            {
                nota=prompt("La nota no es válida, ingrese la nota:");
                nota=parseInt(nota);
            }
                                  
        /*sexo= prompt("Introduzca su sexo.");
           
            while (sexo!="f" && sexo!= "m")
            {
            sexo=prompt("El sexo no es válido, ingrese el sexo:");
            }*/
        }
        
        nota=parseInt(nota);
        notasuma=notasuma+nota;

        
        
        alert("el promedio es: "+notasuma);

}
//github.com/mauricioCerizza
function mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var contador;
    var notasuma;
    var notaMasBaja;
    var sexoNotaBaja;
    var notaMenor;
    //definición de variables

    
    notasuma= 0;
    notaMasBaja= 999999;
    sexoNotaBaja= null;
    notaMenor= 0;

    //seteo inicial de contadores
    

    for (contador= 0; contador <5; contador=contador +1) // repetidor de datos x 5
        {
        nota= prompt("Introduzca la nota.");
        nota= parseInt(nota);
            
            while (nota <0 || nota >10) // validador de nota 1-10
            {
                nota =prompt("La nota no es válida, reingrese la nota:");
                nota =parseInt(nota);
            }
        // repetidor de nota x 5                         
        sexo= prompt("Introduzca su sexo.");
           
            while (sexo!="f" && sexo!= "m")// validador de sex f-m
            {
            sexo=prompt("El sexo no es válido, reingrese el sexo:");
            }
        //repetidor de sexo x 5
    
        nota=parseInt(nota);
        notasuma= notasuma+ nota; 

            if(nota<notaMasBaja) //flag p nota menor y sexo
            {
              notaMasBaja= nota;
              sexoNotaBaja= sexo;
            }

            if(nota>=6 && sexo == "m")
            notaMenor=notaMenor+1
        }
       
        promedio= notasuma/contador;
       
        alert // salida
        (
            "El promedio de las notas totales es: "+ promedio+ "."+"\n"+
            "La nota mas baja es: "+notaMasBaja+ " y su sexo es: "+sexoNotaBaja+ "."+"\n"+
            "La cantidad de varones con nota mayor o igual a 6, es: "+notaMenor
        );

}
//github.com/mauricioCerizza
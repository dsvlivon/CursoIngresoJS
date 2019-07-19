/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) 
de 5 alumnos e informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var sexoMenor;
    var notaMenor;
    var notaMayor;  
    var contador;
    var sumaNota; // definición de variables
    
    sexoMenor= null;
    notaMenor= 10;
    sumaNota= 0; 
    notaMayor=0; // seteo inicial de contadores
   
    
    for (contador=0; contador <5; contador= contador+ 1) //preguntas x 5
    {
        nota= prompt("ingrese la nota:");
        nota= parseInt(nota);
        
            while (nota<= 0 || nota> 10) //validador de notas
            {
                nota= prompt("La nota ingresada no es válida. Ingrese la nota:");
                nota= parseInt(nota);
            }
       
        sexo= prompt("ingrese su sexo:");

            while (sexo!= "f" && sexo!= "m") //validador de sexo
            {
               sexo= prompt("El sexo no es válido. Ingrese el sexo:");
            }

        nota= parseInt(nota);
        sumaNota= sumaNota+ nota;

            if (nota<notaMenor) // flag c) p nota y sexo menor
            {
                notaMenor= nota;
                sexoMenor= sexo;
            }

            if (nota>=6 && sexo == "m") // flag d) p  m>6
            {
                notaMayor=notaMayor+1
            }
    }

    promedio= sumaNota/ contador; // promedio

    alert // salida de información
    (
        "a) El promedio de las notas totales es: "+ promedio+ "."+ "\n"+
        "b) La nota más baja es: "+ notaMenor+ " y el sexo de esa persona es: "+sexoMenor+ "."+ "\n"+
        "c) La cantidad de varones que su nota haya sido mayor o igual a 6 es: "+ notaMayor+ "."+ "\n" 
    );
}


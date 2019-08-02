function mostrar()
{
    var animal;
    var temperatura;
    var peso;
    var rta;

    var acumuladorPeso=0;
    var contadorPar=0;
    var temperaturaMax=0;
    var contadorO=0;
    var contadorG=0;
    var minimo;
    var maximo;
    var animalMax;
    var animalMin;
    var iteracionUno=true;
    var pesoFrioMax;
    var pesoFrioMin;

    do 
    {
        animal=prompt("Ingrese el nombre del animal: ");
        while (isNaN(animal)==false) // VALIDADOR DE NOMBRE
        {
            animal=prompt("Error. Ingrese un nombre de animal válido: "+"\n"+"(Nombres sin números.)");
        }
        peso=prompt("Ingrese el peso del animal: ");
        peso=parseInt(peso);
        while (isNaN(peso)==true || peso< 1 || peso> 1000) //VALIDADOR DE PESO
        {
            peso=prompt("Error. Ingrese un peso de animal válido: "+"\n"+"(Peso entre 1 y 1000)");
            peso=parseInt(peso);            
        }
        temperatura=prompt("Ingrese la temperatura del habitat del animal: ");
        temperatura=parseInt(temperatura);
        while (isNaN(temperatura)==true || temperatura< -30 || temperatura> 30) //VALIDADOR DE TEMPERATURA
        {
            temperatura=prompt("Error. Ingrese una temperatura de habitat de animal válida: "+"\n"+"(Temperatura entre -30 y 30)");
            temperatura=parseInt(temperatura);            
        }
        
        if (iteracionUno===true) // INICIALIZAR CONTEO 
        {
            pesoMax=peso;
            temperaturaMax=temperatura;
            animalMax=animal;
            
            if (temperatura<0) 
            {
                pesoFrioMax=peso;
                pesoFrioMin=peso;
            }

            iteracionUno=false;
        }
        if (temperatura>temperaturaMax) // TEMPERATURA MAXIMA
        {
            temperaturaMax=temperatura;
            animalMax=animal;
        }
        
        if (temperatura<0) // TEMPERATURA MAYOR A 0
        {
            contadorO++;
            if (peso>pesoFrioMax) 
            {
                pesoFrioMax=peso;
                animalFrioMax=animal;
            }
            else if (peso<pesoFrioMin)
            {
                pesoFrioMin=peso;
                animalFrioMin=animal;
            }

        }

        if (temperatura%2== 0 && temperatura!= 0) // TEMPERATURA PAR
        {
            contadorPar++;
        }


        acumuladorPeso+=peso;
        contadorG++;
        rta=confirm("¿Desea continuar ingresando datos?")
    } while (rta===true);

    document.write("a) La cantidad de temperaturas pares es: "+contadorPar+ "<br>"); 
    document.write("b) El nombre del animal más pesado es: "+ animalMax+ " y su temperatura es: "+ temperaturaMax+ "<br>");
    document.write("c) La cantidad de animales que viven a menos de 0 grados es: "+contadorO+ "<br>");
    document.write("d) El promedio del peso de todos los animales: "+(acumuladorPeso/contadorG)+ "<br>");
    document.write("f) El peso máximo de los animales cuyas temperaturas sean bajo cero es: "+ pesoFrioMax+ "<br>");
    document.write("f) El peso mínimo de los animales cuyas temperaturas sean bajo cero es: "+ pesoFrioMin+ "<br>");
                
}
/*Realizar el algoritmo que permita ingresar :
-el nombre de un animal del zoológico, 
-el peso el cual debe ser entre (1 y 1000)  
-la temperatura del hábitat (entre -30 y 30) 
*hasta que el usuario quiera e informar.
*al terminar el ingreso por document.write:

a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )*/
function mostrar()
{
    var numero;
    var letra;
    var respuesta="si";
    var contadrP=0;
    var contadorI=0;
    var contadorC=0;
    var contadorPos=0;
    var acumuladorPos=0;
    var acumuladorNeg=0;
    var maximo=0;
    var letramax=null;
    var minimo=100;
    var letramin=null;
    // creación de variables

    while (respuesta== "si") 
    {       
        numero=prompt("Ingrese numero: ");// PIDE PESO
        numero=parseInt(numero);
        while (isNaN(numero)==true || numero<-100 || numero>100) // validador de peso
        {
            numero=prompt("Error. Ingrese un peso válido: "+"\n"+"(Sólo valores numéricos entre 1 y 100).")
            numero=parseInt(numero);  
        }
        /*letra=prompt("Ingrese una letra: ")
        while (isNaN(letra)==false) 
        {
            letra=prompt("Error. Ingrese una letra válida: ")
        }
        ///////////////////////////////
        if (numero%2==0) // condición A
        {
            contadorP=contadorP+1;    
        }
        else if (numero%2==1) // condición B
        {
            contadorI=contadorI+1;
        } 
        else // condición C
        {
            contadorC=contadorC+1;
        }

        if (numero<0) 
        {
            acumuladorNeg=acumuladorNeg+numero;    
        }
        else if (numero>0) 
        {
            acumuladorPos=acumuladorPos+numero;
            contadorPos=contadorPos+1;
        } 
        if (numero<minimo) 
        {
            minimo=numero;
            letraMin=letra;
        }
        else if (numero>maximo)
        {
            maximo=numero;
            letraMax=letra;
        }*/
        respuesta=prompt("Para ingresar otro dato ingrese: si");
    } 

alert
(
    "a) La cantidad de números pares es: "+ contadorP+ "\n"+ //OK
    "b) La cantidad de números impares es: "+ contadorI+ "\n"+ //OK
    "c) La cantidad de ceros es: "+ contadorC+ "\n"+ //OK
    "d) El promedio de todos los números positivos ingresados es: "+ (acumuladorPos/contadorPos)+ "\n"+ //OK
    "e) La suma de todos los números negativos es: "+ acumuladorNeg +"\n"+ //OK
    "f) El número y la letra del máximo es: " +maximo+ letraMax+ " y el mínimo son: "+minimo+ letraMin
); 
    /*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre 
    validar entre -100 y 100
    hasta que el usuario quiera e informar al terminar el ingreso
        informar por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)*/
                
}// FIN DE LA FUNCION

function mostrar()
{
    var respuesta;
    var letra;
    var numero;
    var contadorP=0;
    var contadorI=0;
    var contadorO=0;
    var acumuladorPos=0;
    var contadorPos=0;
    var acumuladorNeg=0;
    var minimo;
    var letraMin;
    var maximo;
    var letraMax;
    var iteracionUno=1;

    do 
    {
        letra=prompt("Ingrese una letra: ");
        while (isNaN(letra)==false) // PEDIR Y VALIDAR LETRA
        {
            letra=prompt("Error. Ingrese sólo letra: ");
        }

        numero=prompt("Ingrese un numero: ");
        numero=parseInt(numero);
        while (isNaN(numero)==true || numero<-100 || numero>100) // PEDIR Y VALIDAR NUMERO 
        {
            numero=prompt("Error. Ingrese un numero válido: "+"\n"+"Numeros válidos entre -100 y 100")
            numero=parseInt(numero);
        }
        if (numero%2== 0 && numero!=0) // CONTADOR PAR
        {
            contadorP++;
        }
        else if (numero!=0)// CONTADOR IMPAR 
        {
            contadorI++;
        }

        if (numero> 0) // CONTADOR-ACUMULADOR POSITIVOS
        {
            acumuladorPos+= numero;
            contadorPos++;
        } 
        else if (numero< 0) // CONTADOR-ACUMULADOR NEGATIVOS
        {
            acumuladorNeg+= numero;
        }
        else // CONTADOR CEROS
        {
            contadorO++;
        }

        if (iteracionUno=== 1) 
        {
            minimo=numero;
            letraMin=letra;
            maximo=numero;
            letraMax=letra;

            iteracionUno++;
        } 
        else if (numero<minimo)
        {
            minimo=numero;
            letraMin=letra;
        }
        else if (numero>maximo)
        {
            maximo=numero;
            letraMax=letra;
        }
        respuesta=confirm("¿Desea continuar?")
    } while (respuesta== true);

document.write ("a) La cantidad de números pares es: "+ contadorP+ "<br>"); 
document.write ("b) La cantidad de números impares es: "+ contadorI + "<br>");
document.write ("c) La cantidad de ceros es: "+ contadorO + "<br>");
document.write ("d) El promedio de todos los números positivos ingresados es: "+ (acumuladorPos/contadorPos) + "<br>");
document.write ("e) La suma de todos los números negativos es: "+ acumuladorNeg + "<br>");
document.write ("f) El número y la letra del máximo son: "+ maximo+ letraMax+ " y el mínimo son: "+ minimo+ letraMin+ "<br>");

}//FIN DE LA FUNCION // me llevo 0:52:48 hacerlo

/*Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos:
-una letra 
-un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
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
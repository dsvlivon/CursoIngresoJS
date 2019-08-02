function mostrar()
{  
    var numA;
    var numB;
    var rta;
    
    numA=prompt("Ingrese el primer número:");
    numB=prompt("Ingrese el segundo número:");

    if (numA==numB) 
    {
        rta=numA+numB;
    }
    else
    {
        numA=parseInt(numA);
        numB=parseInt(numB);

        if (numA>numB) 
        {
            rta=numA/numB;           
        }
        else if (numA<numB)
        {
           rta=numA+numB;

            if (rta<50) 
            {
                rta=" la suma es "+ rta+ " y es menor a 50.";    
            }
        }
    }

    alert(rta);
}

/*Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado:
-Si son iguales los muestro concatenados. 
-Si el primero es mayor, los divido, 
-de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".*/            
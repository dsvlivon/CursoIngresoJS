function mostrar()
{   /*
    -Si son iguales los muestro concatenados. 
    -Si el primero es mayor, los divido, 
    -de lo contrario los sumo. 
    -Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje "la suma es xxx y es menor a 50".*/

    var numA;
    var numB;
    var anuncio;
    
    numA= prompt("Ingrese el primer número:");
    numB= prompt("Ahora, ingrese el segundo número:");

    if (numA == numB) 
    {
        anuncio= numA + numB;
    } 
       else
       {
        numA= parseInt(numA);
        numB= parseInt(numB);    
                               
            if (numA > numB) 
            {
                anuncio= numA / numB;
            } 
                else 
                {
                    anuncio= numA + numB;      
                    
                    if (anuncio >10)
                    {
                        alert("la suma es "+ anuncio+ " y supero el 10.");
                    }
                }
        }

    alert(anuncio);       
      
    }

                  
function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var mayor;

    primerNumero= prompt("Ingrese el primer número.");
    segundoNumero= prompt("Ingrese el segundo número.");

    if (primerNumero == segundoNumero) 
    {
        resultado= primerNumero+ segundoNumero;
    }
        else
        {
            primerNumero= parseInt(primerNumero);
            segundoNumero= parseInt(segundoNumero);

            if (primerNumero > segundoNumero) 
            {
                resultado= primerNumero - segundoNumero;
            } 
            
                else
                {
                    resultado= primerNumero + segundoNumero;   
                    if (resultado >10) 
                    {
                        alert("la suma es "+ resultado+ " y supero el 10.");
                    }   
                
                }
        }

        alert(resultado);
        
    }

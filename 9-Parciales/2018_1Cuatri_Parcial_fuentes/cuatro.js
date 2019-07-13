function mostrar()
{
    var primerNumero
    var segundoNumero
    var resultado

    primerNumero= prompt("Ingrese el primer número.");
    segundoNumero= prompt("Ingrese el segundo número.");

    if (primerNumero == segundoNumero) {
        resultado(primerNumero+segundoNumero);
    }
        else 
    {
        primerNumero=parseInt(primerNumero);
        segundoNumero=parseInt(segundoNumero);

        if(primerNumero>segundoNumero);
        {
            resultado=primerNumero-segundoNumero;
        }

        else
        {
        resultado=primerNumero+segundoNumero;
            if(resultado>10);
            {
                resultado= primerNumero+segundoNumero;
            }
        }
    }
    alert(resultado)
}
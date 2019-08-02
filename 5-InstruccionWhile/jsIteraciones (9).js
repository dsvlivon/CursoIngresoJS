function mostrar()
{
	var numero;
	var maximo;
	var minimo;
	var respuesta;

	maximo= 0;
	minimo= 999999;
	respuesta= "si";

	while (respuesta== "si") 
	{
		numero=prompt("Ingrese un numero:");
		numero=parseInt(numero);

		while (isNaN(numero)== true) // validador para ingresar solo numero	
		{	
			numero= prompt("Error. Ingrese un numero:")
			numero= parseInt(numero);
		}
		
		if (numero< minimo) // flag para minimos
		{
			minimo= numero;	
		}
		
		if (numero> maximo) // flag para maximos
		{
			maximo= numero;	
		}

		respuesta= prompt("Para ingresar otro numero ingrese: si");
	}

	document.getElementById("maximo").value= maximo;
	document.getElementById("minimo").value= minimo;


	
}//FIN DE LA FUNCIÓN

/*while (isNaN(numero))== true // validador para ingresar solo numero
{
	numero= prompt("ingrese un numero:")
	numero= parseInt(numero);
}
*/
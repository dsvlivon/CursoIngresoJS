function mostrar()
{
	var numero;
	var respuesta;
	var positivo;
	var negativo;
	

	respuesta= "si";
	positivo= 0;
	negativo= 1;
	

	while (respuesta== "si") 
	{
		numero= prompt("Ingrese un numero.")
		numero= parseInt(numero);
		
		while (isNaN(numero)== true) // validador para ingresar solo numero	
			{	
				numero= prompt("Error. Ingrese un numero:")
				numero= parseInt(numero);
			}
		
			if (numero> 0) 
		{
			positivo= positivo+ numero;
		}
		else
		{
			negativo= negativo* numero;
		}

		respuesta= prompt("Para ingresar otro numero ingrese: si")
	}

	document.getElementById('suma').value= positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
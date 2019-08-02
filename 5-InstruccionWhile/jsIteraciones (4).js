function mostrar()
{
	var numero;

	numero=prompt("Ingrese un número entre 0 y 9: ");
	numero=parseInt(numero);


	while (isNaN(numero)== true) // validador para ingresar solo numero	
	{	
		numero= prompt("Error. Ingrese un numero:")
		numero= parseInt(numero);
		while (numero>10 || numero<0) 
		{
			numero=prompt("Error. Ingrese un número entre 0 y 9: ")
			numero=parseInt(numero);
		}
		document.getElementById("Numero").value=numero;
	
	}
}//FIN DE LA FUNCIÓN



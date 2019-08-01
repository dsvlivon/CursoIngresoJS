function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta;

	
	do 
	{
		numero= prompt("ingrese un número cualquiera.");
		while (isNaN(numero) == true)
		{
			numero= prompt("Error. Ingrese un número cualquiera.");
		}
		numero= parseInt(numero);
		
		acumulador=acumulador+numero;		
		contador=contador+1;

		respuesta=prompt("para cargar datos ingrese si, de lo contrario no.");

		while (respuesta!= "si" && respuesta!= "no") 
		{
			respuesta=prompt("Error. para cargar datos ingrese si, de lo contrario no.");
		}
	}while (respuesta =="si") 
	
	acumulador= parseInt(acumulador);

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN


	
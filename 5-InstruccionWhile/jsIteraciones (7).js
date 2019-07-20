function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si";

	

	while (respuesta =="si") 
	{
		numero= prompt("ingrese un número cualquiera.");
		numero= parseInt(numero);
		respuesta=prompt("para cargar datos ingrese si, de lo contrario no.");

		acumulador=acumulador+numero;		
		
		contador=contador+1;
	}
	
	acumulador= parseInt(acumulador);

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN


	
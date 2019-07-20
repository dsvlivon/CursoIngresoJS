function mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si";

	while (respuesta=="si") 
	{
		numero= prompt("ingrese un numero:")
		numero= parseInt(numero);

		respuesta= prompt("ingrese si para ingresar otro numero.")
		
		if (numero>0) 
		{
			positivo=positivo+numero;	
		}

		if (numero<0) 
		{
			negativo=negativo*numero;		
		}
	}
	
	
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
function mostrar()
{

	var contador=0;
	var notaMasBaja;
	var notaMasAlta;
	// declarar variables
	
	var respuesta='si';
	notaMasAlta=9999999;
	notaMasBaja=0;

	while(respuesta!='no')
	{
		numero= prompt("ingrese un numero:")
		numero= parseInt(numero);
		while (isNaN(numero) == true)
		{
			numero= prompt("error, ingrese un numero:")
			numero= parseInt(numero);
		}
		respuesta= prompt("ingrese no para finalizar la carga de datos.")
	
	}

	if(nota<notaMasBaja) //flag p nota menor 
	{
	  notaMasBaja= nota;
	}

	if(nota>notaMasAlta) //flag p nota menor
	{
	  notaMasAlta= nota;
	}

document.getElementById("maximo").value=notaMasAlta;
document.getElementById("minimo").value=notaMasBaja;

}//FIN DE LA FUNCIÓN

/*while (isNaN(numero))== true // validador para ingresar solo numero
{
	numero= prompt("ingrese un numero:")
	numero= parseInt(numero);
}
*/
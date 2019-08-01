function mostrar()
{
	var numero;
	/*var contador=0;*/
	var minimo;
	var maximo;
	var respuesta='si';
	var esPrimeraIteracion= true;

	/*minimo=9999;
	maximo=0;*/

	while(respuesta!='no')
	{
		numero= prompt("ingrese un numero:")
		numero= parseInt(numero);
		
		if(esPrimeraIteracion === true)
		{
			maximo = numero;
			minimo = numero;
			esPrimeraIteracion = false;
		}
		else if (numero > maximo)
		{
			maximo = numero;
		}
		else if (numero < minimo)
		{
			minimo = numero;
		}
		respuesta=prompt("desea ingresar otro dato si/no")
	}	

document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN

/*while (isNaN(numero))== true // validador para ingresar solo numero
{
	numero= prompt("ingrese un numero:")
	numero= parseInt(numero);
}*/

/*
"2"==2 true (comparacion abstracta)
"2"===2 false (comparacion estricta)
*/
/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/
function mostrar()
{
//declarar contadores y variables 	
	var numero;
	var respuesta;
	var sumaNegativos;
	var contadorNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPar;
	
//valorizar variables y puesta a cero de contadores
	respuesta= "si";
	sumaNegativos= 0;
	contadorNegativos= 0;
	sumaPositivos= 0;
	contadorPositivos= 0;
	contadorCeros= 0;
	contadorPar=0

//ooperaciones e iteraciones
	while(respuesta== "si")
	{
		numero=prompt("Ingrese un numero.");
		numero=parseInt(numero);

		while (isNaN(numero)== true) // validador para ingresar solo numero	
			{	
				numero= prompt("Error. Ingrese un numero:")
				numero= parseInt(numero);
			}
		
		if (numero< 0) //flag para negativos
		{
			sumaNegativos=sumaNegativos+numero;
			contadorNegativos=contadorNegativos+1;
		}
		if (numero> 1) //flag para positivos
		{
			sumaPositivos=sumaPositivos+numero;
			contadorPositivos=contadorPositivos+1;
		}
		if (numero== 0) //flag para ceros
		{
			contadorCeros=contadorCeros+1;
		}
		if (numero!= 0 && numero%2==0 ) 
		{
			contadorPar=contadorPar+1;
		}

		respuesta=prompt("Para ingresar otro numero ingrese: si");
	}

	sumaNegativos= parseInt(sumaNegativos);
	sumaPositivos= parseInt(sumaPositivos);
	contadorNegativos= parseInt(contadorNegativos);
	contadorPositivos= parseInt(contadorPositivos);

	document.write
	(
		"1-Suma de los negativos es: "+ sumaNegativos+ "<br>"+ "\n"+
		"2-Suma de los positivos es: "+ sumaPositivos+ "<br>"+ "\n"+
		"3-Cantidad de positivos es: "+ contadorPositivos+ "<br>"+ "\n"+
		"4-Cantidad de negativos es: "+ contadorNegativos+ "<br>"+ "\n" +
		"5-Cantidad de ceros es: "+ contadorCeros+ "<br>"+ "\n"+
		"6-Cantidad de números pares es: "+ contadorPar+ "<br>"+ "\n"+
		"7-Promedio de positivos es: "+ (sumaPositivos/contadorPositivos)+ "<br>"+ "\n"+
		"8-Promedios de negativos es: "+ (sumaNegativos/contadorNegativos)+ "<br>"+ "\n"+
		"9-Diferencia entre positivos y negativos es:"+ (sumaPositivos+sumaNegativos)+ "<br>" 
	);


}//FIN DE LA FUNCIÓN


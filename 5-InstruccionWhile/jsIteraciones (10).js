function mostrar()
{
	var numero;
	var contador;
	var maximo;
	var minimo;
	var acumuladorP;
	var acumuladorN;
	var contadorPos;
	var contadorNeg
	var contadorCer;
	var contadorPar;
	var esPrimeraIteracion;

do
{	numero=prompt("Ingrese un numero: ");
	numero=parseInt(numero);

	while (isNaN(numero) || numero<-100 || numero>100 ) 
	{
		numero=prompt("Error. Ingrese un numero válido (entre -100 y 100): ");
		numero=parseInt(numero);
	}
	
	if (esPrimeraIteracion=== true) 
	{
		maximo= numero;	
		minimo= numero;
		esPrimeraIteracion=false;
	} 
	else if (numero>maximo)
	{
		maximo= numero;
	}
	else if (numero<minimo)
	{
		minimo= numero;
	}

	respuesta=confirm("¿Desea ingresar otro dato?")
} while (respuesta==true);

document.write("asdasdasd"+"maximo"+"<br>")
document.write("takawishi"+"m1inimo"+"<br>")


}//FIN DE LA FUNCIÓN

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



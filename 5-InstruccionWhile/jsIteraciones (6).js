function mostrar()
{
	var numero;
	var contador;
	var promedio;
	var suma;

	numero=prompt("Ingrese un numero: ");
	numero=parseInt(numero);

	contador=0;
	suma=0;

	
		
		while (contador<5)
		{
			while (isNaN(numero)== true) // validador para ingresar solo numero	
			{	
				numero= prompt("Error. Ingrese un numero:")
				numero= parseInt(numero);numero=prompt("Ingrese otro numero: ");
			}
			numero=parseInt(numero);

			contador=contador+1;
			suma=suma+numero;
		}	
	numero=parseInt(numero);
	suma=parseInt(suma);
	promedio=suma/contador;

	document.getElementById("suma").value=suma;
	document.getElementById("promedio").value=promedio;
	

}//FIN DE LA FUNCIÓN
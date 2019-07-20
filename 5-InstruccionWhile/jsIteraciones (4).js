function mostrar()
{
	var numero
	

	numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero);

	while (numero<0 || numero>10) 
	{
		numero = prompt("ingrese un número entre 0 y 9.");
		numero = parseInt(numero);
		console.log("bucle");
	}
	console.log("sale")
	document.getElementById("Numero").value=numero;
		
}//FIN DE LA FUNCIÓN
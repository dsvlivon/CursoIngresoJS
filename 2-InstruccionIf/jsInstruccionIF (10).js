function mostrar()
{
//Genero el número RANDOM entre 1 y 10 
	var num;
	
	num= Math.floor((Math.random()*(11+1)-1)+1);
		
	if (num>8) {
		alert( "EXCELENTE. Su nota es: "+num);
	} else if (num <4) {
		alert( "Vamos, la próxima se puede." +" Su nota es: "+num);
	} else {
		alert( "APROBÓ. Su nota es: "+num);
	}
		

}//FIN DE LA FUNCIÓN
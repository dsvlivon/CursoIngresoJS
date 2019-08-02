function mostrar()
{
    var nota;
    var sexo;
    var contador;
    var notaSuma;
    var notaMasBaja;
    var sexoMasBajo;
    var varonSeis;

    contador= 0;
    notaSuma= 0;
    notaMasBaja= 99999;
    sexoMasBajo= null;
    varonSeis= 0;

    while (contador<5)
    {
        nota=prompt("Ingrese una nota.");
		nota=parseInt(nota);

		while (isNaN(nota)== true) // validador para ingresar solo numero	
        {	
            nota= prompt("Error. Ingrese un numero:")
            nota= parseInt(nota);
        }
        contador=contador+ 1;
        notaSuma=notaSuma+nota;
        
        sexo= prompt("Ingrese el sexo."+ "\n"+ "F: para femenino."+ "\n"+ "M: para masculino.");
        while(sexo!= "F" && sexo!= "M")
        {
            sexo= prompt("Error. Ingrese el sexo."+ "\n"+ "F: para femenino."+ "\n"+ "M: para masculino.");
        }

        if (nota<notaMasBaja) // flag nota/sexo mas bajo
        {
            notaMasBaja= nota;
            sexoMasBajo= sexo;    
        }
        if (nota>= 6 && sexo== "M") // flag varones c/nota >6
        {
            varonSeis=varonSeis+1;
        }
    }
    alert
    (
        "a) El promedio de las notas totales es:"+ (notaSuma/contador)+ "\n"+ 
        "b) La nota más baja es: "+ notaMasBaja+ " y el sexo de esa persona es: "+ sexoMasBajo+ "\n"+  
        "c) La cantidad de varones que su nota haya sido mayor o igual a 6 es: "+ varonSeis
        
    );
}
/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10)
(validar el sexo “f” o “m”) 
de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.

github.com/mauricioCerizza*/
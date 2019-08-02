function mostrar()
{
    var nota;
    var sexo;
    var contador=0;
    var minimo=100;
    var sexoMin=null;
    var acumulador=0;
    var contadorV=0;
    
   while (contador<5) 
   {
        sexo=prompt("Ingrese el sexo:");
        while (isNaN(sexo)== false || sexo!="f" && sexo!="m") 
        {
            sexo=prompt("Error. El sexo ingresado es inválido."+"\n"+ "Ingrese el sexo: f/m");
        }
        
        nota=prompt("Ingrese la nota:")
        nota=parseInt(nota);       
        while (isNaN(nota)== true || nota <1 || nota>10 ) 
        {
            nota=prompt("Error. La nota ingresada es inválida."+"\n"+ " Ingrese la nota: 1 a 10")
            nota=parseInt(nota);
        }
        acumulador+=nota;
        contador++;    
  
        if (sexo=="m" || nota>= 6) 
        {
            contadorV=contadorV+1;
        }

        if (nota<minimo) 
        {
            minimo=nota;
            sexoMin=sexo;
        }
    }

alert
    (
        "a) El promedio de las notas totales es:"+ (acumulador/5)+ "\n"+ 
        "b) La nota más baja y el sexo de esa persona es: "+ minimo+sexoMin+ "\n"+
        "c) La cantidad de varones que su nota haya sido mayor o igual a 6 es: "+ contadorV
    );
}

/*Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de:
-las notas (validar entre 0 y 10)
-el sexo (validar el sexo “f” o “m”) 
-de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
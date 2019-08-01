function mostrar()
{
    var peso;
    var temperatura;
    var marca;
    var respuesta;
    var contadorTPar;
    var pesoMaximo;
    var pesoMinimo;
    var contadorCero;
    var contadorPeso;
    var acumuladorPeso;
    var PrimeraIteracion=true;

    do
    { 
        marca=prompt("Ingrese la marca: ");
        
        peso=prompt("Ingrese el peso del producto: ");
        peso=parseInt(peso);
        while (isNaN(peso)==true || peso<1 || peso>100) 
        {
            peso=prompt("Error.Ingrese el peso del producto: "+"\n"+"Peso válido entre (1 y 100)");
            peso=parseInt(peso);
        }
        temperatura=prompt("Ingrese la temperatura de conservación del producto: ");
        temperatura=parseInt(temperatura);
        while (isNaN(temperatura)==true || temperatura<-30 || temperatura>30) 
        {
            temperatura=prompt("Error.Ingrese una temperatura de conservación del producto: "+"\n"+"temperatura válida entre (-30 y 30).");
            temperatura=parseInt(temperatura);
        }

        

        respuesta=confirm("Desea ingresar mas datos?")
    } while (respuesta === true) 

   document.write("a) La cantidad de temperaturas pares es:"+"<br>") 
   document.write("b) La marca del producto más pesado es: "+"<br>")
   document.write("c) La cantidad de productos que se conservan a menos de 0 grados es: "+"<br>") 
   document.write("d) El promedio del peso de todos los productos es: "+"<br>")	
   document.write("f) El peso máximo y el mínimo es: "+"<br>")

}

/*
algoritmo que permita ingresar:
marca
peso (entre 1 y 100) 
temperatura (entre -30 y 30) 
hasta que el usuario quiera.

informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )*/
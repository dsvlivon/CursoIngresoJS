function mostrar()
{
    var temperatura;
    var marca;
    var peso;
    var pesoMax=0;
    var marcaMax;   
    var pesoMin=100;
    var contadorG=0;
    var contadorP=0;
    var contadorO=0;
    var acumuladorPeso=0;
    var respuesta;
    
    

    do 
    {
        marca=prompt("Ingrese la marca:");

        temperatura=prompt("Ingrese la temperatura de almacenamiento: ");
        temperatura=parseInt(temperatura);
        while (isNaN(temperatura)==true || temperatura<-30 || temperatura >30)
        {
            temperatura=prompt("Error. Ingrese la temperatura de almacenamiento: "+"\n"+"Temperaturas válidas entre -30º y 30º");
            temperatura=parseInt(temperatura);
        }
        peso=prompt("Ingrese el peso del producto: ");
        peso=parseInt(peso);
        while (isNaN(peso)==true || peso <1 || peso >100)
        {
            peso=prompt("Error. Ingrese el peso del producto: "+"\n"+"Pesos válidos entre 1 y 100");
            peso=parseInt(peso);
        }
        if (peso<pesoMin) 
        {
            pesoMin=peso;
        } 
        if (peso>pesoMax)
        {
            pesoMax=peso;
            marcaMax=marca;
        }
        if (temperatura<=0) 
        {contadorO++;}
        else if(temperatura%2==0)
        {contadorP++;}

        contadorG++;
        acumuladorPeso+=peso;

        respuesta=confirm("¿desea seguir ingresando datos?")
    } while (respuesta===true);

   document.write("a) La cantidad de temperaturas pares es: "+contadorP+"<br>");     
   document.write("b) La marca del producto más pesado es: "+marcaMax+"<br>");
   document.write("c) La cantidad de productos que se conservan a menos de 0 grados es: "+contadorO+"<br>");
   document.write("d) El promedio del peso de todos los productos es: "+(acumuladorPeso/contadorG)+"<br>");
   document.write("f) El peso máximo es: "+pesoMax+ " y el mínimo es: "+pesoMin+"<br>");
}// FIN DE LA FUNCION

/*Bienvenidos. 
Realizar el algoritmo que permita ingresar
-la marca del producto, 
-el peso el cual debe ser entre 1 y 100 (validar), 
-la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
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

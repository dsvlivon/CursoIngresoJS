function mostrar()
{
    var respuesta="si"; 
    var marca;
    var peso;
    var temperatura;
    var contadorP=0;
    var contadorG=0;
    var acumuladorPeso=0;
    var marcaMax=null;
    var contadorC=0;
    var promedioPeso;
    var pesoMax=0;
    var pesoMin=999999;

    while (respuesta== "si") //INICIO DE ITERACION
    {
        marca=prompt("Ingrese la marca: ");// PIDE MARCA
        while (isNaN(marca)==false) // validador de marca
        {
            marca=prompt("Error. Ingrese una marca válida: "+"\n"+"(Sólo valores alfabéticos o alfa numéricos).");
        }
        peso=prompt("Ingrese el peso: ");// PIDE PESO
        peso=parseInt(peso);
        while (isNaN(peso)==true || peso<1 || peso>100) // validador de peso
        {
            peso=prompt("Error. Ingrese un peso válido: "+"\n"+"(Sólo valores numéricos entre 1 y 100).")
            peso=parseInt(peso);             
        }   
        temperatura=prompt("Ingrese la temperatura: "); // PIDE TEMPERATURA
        temperatura=parseInt(temperatura);
        while (isNaN(temperatura)== true || temperatura <-30 || temperatura >30) // validador de temperatura 
        {
            temperatura=prompt("Error. Ingrese una temperatura válida: "+"\n"+"(Sólo valores numéricos entre -30 y 30).");
            temperatura=parseInt(temperatura);
        }
        acumuladorPeso=acumuladorPeso+peso; // condicion D
        contadorG=contadorG+1;
        ////////////////////////////////////
        if (temperatura%2==0) // condicion A
        {
            contadorP=contadorP+1;
        }
        if (peso>pesoMax) // condicion B y F(max)
        {
            pesoMax=peso;
            marcaMax=marca;
        }
        if (temperatura<0) // condicion C
        {
            contadorC=contadorC+1;
        }
        if (peso<pesoMin) // condicion F(min) 
        {
            pesoMin=peso
        }
        /////////////////
        respuesta=prompt("Para ingresar otro dato ingrese: si");// SALIDA DE ITERACION
    }    
    document.write("a) La cantidad de temperaturas pares es: "+ contadorP+ "<br>"); 
    document.write("b) La marca del producto más pesado es: "+ marcaMax+ "<br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados es: "+ contadorC+ "<br>");
    document.write("d) El promedio del peso de todos los productos es: "+ (acumuladorPeso/contadorG)+"<br>");
    document.write("f) El peso máximo es: "+ pesoMax+ " y el mínimo es: "+pesoMin);
    
}// FIN DE LA FUNCION

/*Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
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

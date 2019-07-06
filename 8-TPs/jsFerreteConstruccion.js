/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var longitud;
    var anchura;
    var perimetro;
    var calculo;

        longitud = document.getElementById("Largo").value;
        longitud = parseInt(longitud);

        anchura = document.getElementById("Ancho").value;
        anchura = parseInt(anchura);

        perimetro = ((longitud+ anchura)*2);
        
        calculo = perimetro*3;
        

    //console.log("El largo es: "+longitud, "y el ancho es " +anchura, "La cantidad de metros de alambre a comprar es " +calculo);//
    alert("La cantidad de alambre requerida es " +calculo +"mts²");
}
function Circulo () 
{
	var radio;
    var calculo;

        radio = document.getElementById("Radio").value;
        radio = parseInt(radio);
        
        calculo = ((radio*2)*3.14);
        
    console.log("La cantidad de requerida es " +calculo +"mts²");
    alert("La cantidad de requerida es " +calculo +"mts²");
}
function Materiales () 
{
    var longitud;
    var anchura;
    var area;
    var cal;
    var cemento;
    

        longitud = document.getElementById("Largo").value;
        longitud = parseInt(longitud);

        anchura = document.getElementById("Ancho").value;
        anchura = parseInt(anchura);

        area = (longitud* anchura);

        cal = (area)*2;
        cemento = (area)*3;
       
        

    //console.log("El largo es: "+longitud, "y el ancho es " +anchura, "La cantidad de metros de alambre a comprar es " +calculo);//
    alert("Para hacer un contrapiso en su terreno, usted requiere " +cal +" bolsas de cal y " +cemento +" bolsas de cemento.");
	
}
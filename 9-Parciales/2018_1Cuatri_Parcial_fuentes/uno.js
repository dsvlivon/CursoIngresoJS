
function mostrar()
{
    /*var numero;
    var letra;
    var respuesta="si";
    var minimo=50   ;
    var x=50;
    var letramin=null;

    while (respuesta=="si") 
    {
        numero=prompt("ingrese numero:");
        numero=parseInt(numero);
        while (isNaN(numero)==true || numero <0 || numero>50) 
        {
            numero=prompt("ingrese numero:");
            numero=parseInt(numero);
        }
        letra=prompt("ingrese letra:");
        while (isNaN(letra)==false) 
        {
            letra=prompt("ingrese letra:")
        }
        if(numero<minimo)
        {
            minimo=numero;
            letramin=letra
        }

    respuesta=prompt("ingresar otro dato:");
    }
   
    alert("numero minimo es:"+minimo +"letra minima es:"+letramin)*/

    var ancho
    var largo
    var perimetro

        ancho= prompt("introduzca ancho: ");
        largo= prompt("introduzca largo: ");
        
        perimetro= (ancho* largo)*2;

        alert("El perimetro resultante es: "+ perimetro+ "mts²");
        console.log("El perimetro resultante es: "+ perimetro+ "mts²");

}

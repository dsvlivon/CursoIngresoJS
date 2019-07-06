/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temp
    var fac
   
        temp = document.getElementById("Temperatura").value;
        temp = parseInt(temp);

        fac = (temp)*32;

        alert( temp+ " Fahrenheit son " +fac +"Cº");

}

function CentigradosFahrenheit () 
{
    var temp
    var caf
    
        temp = document.getElementById("Temperatura").value;
        temp = parseInt(temp);

        caf = (temp)/32;

        alert( temp+ " Celsius son " +caf +"Fº");
}

function mostrar()
{
    var precio
    var descuento
    var calculo

        precio= prompt("introduzca el precio: ");
        descuento= prompt("introduzca el % de descuento: ");

        calculo= (precio- (precio* descuento/100));

        console.log("El precio final es: "+ calculo+"$.")

        document.getElementById("elPrecioFinal").value= calculo+"$"
}

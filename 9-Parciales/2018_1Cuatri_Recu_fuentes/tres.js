function mostrar()
{
    var precio;
    var dto;
    var calculo;

    precio= prompt("Ingrese el precio:");
    dto= prompt("Ingrese el descuento:");
    calculo= precio- (precio*dto)/100;

    document.getElementById("elPrecioFinal").value= calculo+ "$.";

}

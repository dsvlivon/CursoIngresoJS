/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numero1;
    
    var resultado;

        numero1 = document.getElementById("sueldo").value;
       
        numero1 = parseInt(numero1);
        
        resultado = numero1*1.10;

        document.getElementById("resultado").value = resultado;

    console.log("el resultado es "+resultado);
}

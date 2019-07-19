function mostrar()
{
    var inicio;
    var txt;
    var num;
    var contador;
    var sumaPares;
    var sumaImpares;
    var sumaCeros;
    var promedio;
    var sumaNeg
    var numMax;
    var numMin;
    var letraMax;
    var letraMin;
    var sumaNum;

    contador= 0;
    sumaPares=0;
    sumaImpares=0;
    sumaCeros=0;
    sumaNeg=0;    
    numMax=0;
    numMin=0;
    

        inicio= prompt("¿Desea empezar a cargar datos?"+"\n"+"Para ingresar datos coloque s de lo contrario cualquier letra.");  

        while (incio == "s") 
        {
            num=prompt("A continuación ingrese un número entre -100 y 100:");
            num=parseInt(num);
    
                while (num< -100 || num> 100) 
                {
                    num=prompt("El número ingresado no es valido, reingrese un número entre -100 y 100:");
                    num=parseInt(num);
                    contador=contador;
                }
                
            txt=prompt("Ahora ingrese una letra entre la A y la Z:");    
        }
        
            
    
            /*alert   
            (
            "a) La cantidad de números pares es: "+ sumapares+ "."+ "\n"+
            "b) La cantidad de números impares es: "+ sumaimpares+ "."+ "\n"+
            "c) La cantidad de ceros es: "+ sumaceros+ "."+ "\n"+
            "d) El promedio de todos los números positivos ingresados es: "+ promedio+ "."+ "\n"+  
            "e) La suma de todos los números negativos es: "+ sumanegativos+ "."+ "\n"+ 
            "f) El número y la letra del máximo son: "+ numeromax+ " y "+ letramax+ " y del mínimo son: "+ numeromin+ " y "+ letramin
            );*/
                
}

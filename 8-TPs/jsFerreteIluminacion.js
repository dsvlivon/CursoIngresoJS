/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var quant;
     var punit;
     var amount;
     var dto;   
     var finalp;
     var brand;
     var iibb;
      

        quant= document.getElementById("Cantidad").value;
        quant= parseInt(quant);

        punit= 35;
        

        brand= document.getElementById("Marca").value;
    
        if (quant>= 6) {
                console.log("Condition A Works");
                        amount= punit*quant;
                        dto= (amount* 50)/ 100;
                        finalp= ("dto 50%: "+ (amount - dto)+ "$.");
                        document.getElementById("precioDescuento").value= finalp;
                } 
                else if (quant== 5) {
                        console.log ("Condition B Works");
                                amount= punit* quant;
                                dto= (amount* 30)/ 100;
                                finalp= ("dto 30%: "+(amount - dto)+ "$.");
                                document.getElementById("precioDescuento").value= finalp;
                                               if (brand=="ArgentinaLuz") {
                                               dto= (amount*40)/ 100;
                                               finalp= ("dto 40%: "+(amount - dto)+ "$.");
                                               document.getElementById("precioDescuento").value= finalp;                
                                        }
                }
                else if (quant== 4) {
                        console.log ("Condition C Works");
                                amount= punit* quant;
                                dto= (amount* 20)/ 100;
                                finalp= ("dto 20%: "+(amount- dto)+ "$.");
                                document.getElementById("precioDescuento").value= finalp;
                                        if (brand=="ArgentinaLuz") {
                                                dto= (amount*25)/ 100;
                                                finalp= ("dto 25%: "+(amount - dto)+ "$.");
                                                document.getElementById("precioDescuento").value= finalp;               
                                        }      
                                        if (brand=="FelipeLamparas") {
                                                        dto= (amount*25)/ 100;
                                                        finalp= ("dto 25%: "+(amount - dto)+ "$.");
                                                        document.getElementById("precioDescuento").value= finalp;
                                        }                                        
                }        
                else if (quant== 3) {
                        console.log ("Condition D Works");
                                amount= punit* quant;
                                dto= (amount* 20)/ 100;
                                finalp= ("dto 5%: "+(amount- dto)+ "$.");
                                document.getElementById("precioDescuento").value= finalp;
                                        if (brand=="ArgentinaLuz") {
                                                dto= (amount*15)/ 100;
                                                finalp= ("dto 15%: "+(amount - dto)+ "$.");
                                                document.getElementById("precioDescuento").value= finalp;  
                                        }        
                                        if (brand=="FelipeLamparas") {
                                                dto= (amount*10)/ 100;
                                                finalp= ("dto 10%: "+(amount - dto)+ "$.");
                                                document.getElementById("precioDescuento").value= finalp;
                                        }        
                }
                else if ((document.getElementById("precioDescuento").value) >120) {
                        console.log("Alerta de monto superior." );
                }               
}
 //document.getElementById("precioDescuento").value= ((35*3)+"$.");    
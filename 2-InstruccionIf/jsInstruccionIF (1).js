function mostrar()
{
    var etario
        
        etario = document.getElementById("edad").Value;

        etario = parseInt(etario);
        
        console.log("Su edad es "+etario);

        if (etario==15) 
        {
            alert("niña bonita")
        } 
        else 
        {
            if (etario=>15) 
            {
               alert("niña ve al cole")
            } 
            else 
            {
               alert("anda a laburar, chantun")
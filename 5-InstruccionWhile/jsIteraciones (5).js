function mostrar()
{
    var sexo;

    sexo=prompt("Ingrese un genero."+"\n"+"\n"+"f: para femenino."+ "\n"+"m: para masculino." );

    while (sexo!="f" && sexo!="m")
    {
        sexo=prompt("Error. Ingrese un genero."+"\n"+"\n"+"f: para femenino."+ "\n"+"m: para masculino." );
    }
}//FIN DE LA FUNCIÓN
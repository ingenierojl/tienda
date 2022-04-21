function recibirdatos()// funcion
{
    //alert("ESTA ES LA FUNCIÓN");

    var nombre = (document.getElementById("boxname").value);
    console.log(nombre);
    var apellido = (document.getElementById("boxlastname").value);
    console.log(apellido);
    var email = (document.getElementById("boxemail").value);
    console.log(email);
    var numdoc = (document.getElementById("boxdocument").value);
    console.log(numdoc);

    alert("NOMBRE COMPLETO ES " +nombre+" "+apellido);
    if(nombre=="JORGE" && numdoc==1069725956)
    {
        alert("HOLA JORGE")
    }

}
function funcionvelocidad()
{


    
}

function funcionparimpar()
{
    var numero = parseFloat(document.getElementById("paresimpares").value);
    console.log(numero);
    if(numero % 2 ==0)
    {
        alert("el numero " +numero +" es par")
    }
    else{
        alert("el numero " +numero + " es impar")
    }
}

function funcionnumeromayor()
{
    num1 = parseFloat(document.getElementById("CAJA1").value);
    num2 = parseFloat(document.getElementById("CAJA2").value);
    num3 = parseFloat(document.getElementById("CAJA3").value);
    console.log(num1, num2, num3);

    if(num1>num2 & num1>num3)
    {
        alert("el numero mayor es "+num1+" #1")
    }
    if(num2>num1 & num2>num3)
    {
        alert("el numero mayor es "+num2+" #2")
    }
    if(num3>num2 & num3>num1)
    {
        alert("el numero mayor es "+num3+" #3")
    }



    if(num1<num2 & num1<num3)
    {
        alert("el numero menor es "+num1+" #1")
    }


}



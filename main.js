let miContacto =  document.querySelector("#contacto");
miContacto = addEventListener ("submit",validarContacto);

function validarContacto(e){


    let datos = [];
    datos = e.target;
    console.log(datos[0].value);
    console.log(datos[1].value);
    console.log(datos[2].value);

    alert("Felicidades tu contacto se guardo");
}
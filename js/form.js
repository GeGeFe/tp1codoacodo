var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var mail = document.getElementById("mail");
var telefono = document.getElementById("telefono");
var texto = document.getElementById("texto");

function EnviarFormulario(){
    console.log("consulta enviada");
    var mensajeError = [];
    var error = [];
    var enviar = true;
    if(nombre.value === null || nombre.value === ""){
        mensajeError.push("ingresa un nombre");
        enviar = false;
        console.log(mensajeError);
    }
    if(apellido.value === null || apellido.value === ""){
        mensajeError.push("ingresa un apellido");
        enviar = false;
        console.log(mensajeError);
        print(mensajeError);
        
    }
    if(mail.value === null || mail.value === ""){
        mensajeError.push("ingresa un mail");
        enviar = false;
        console.log(mensajeError);
        print(mensajeError);
    }
    if(telefono.value === null || telefono.value === ""){
        mensajeError.push("ingresa un telefono");
        enviar = false;
        console.log(mensajeError);
        print(mensajeError);
    }
    if(texto.value === null || texto.value === ""){
        mensajeError.push("ingresa tu consulta");
        enviar = false;
        console.log(mensajeError);
        print(mensajeError);
    }
    
       error.innerHTML = mensajeError.join(",");
    
    return enviar;
   
}

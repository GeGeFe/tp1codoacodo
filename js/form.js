var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var mail = document.getElementById("mail");
var telefono = document.getElementById("telefono");
var texto = document.getElementById("texto");

function EnviarFormulario(){
    console.log("consulta enviada");
    var mensajeError = [];
    var error = [];
    if(nombre.value === null || nombre.value === ""){
        mensajeError.push("ingresa un nombre");
    }
    if(apellido.value === null || apellido.value === ""){
        mensajeError.push("ingresa un apellido");
    }
    if(mail.value === null || mail.value === ""){
        mensajeError.push("ingresa un mail");
    }
    if(telefono.value === null || telefono.value === ""){
        mensajeError.push("ingresa un telefono");
    }
    if(texto.value === null || texto.value === ""){
        mensajeError.push("ingresa tu consulta");
    }
    else{
        error.innerHTML = mensajeError.join(",");
    }
    return false;
    print(error);
}

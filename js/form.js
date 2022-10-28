const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const mail = document.getElementById('mail')
const telefono = document.getElementById('telefono')
const texto = document.getElementById('texto')
const form = document.getElementById('consulta')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
  let messages = []
  if (nombre.value === '' || nombre.value == null) {
    messages.push('Escriba su nombre')
  }
  if (apellido.value === '' || apellido.value == null) {
    messages.push('Escriba su apellido')
  }  
  if (mail.value === '' || mail.value == null) {
    messages.push('Ingrese un mail válido')
  }  
  if (texto.value === '' || texto.value == null) {
    messages.push('Ingrese su consulta')
  }  
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
    
 function mostrar(){
  document.getElementById('contacto').style.display = 'block';
}  
function show(){
  document.getElementById('queEs').style.display = 'block';
}  
    
    

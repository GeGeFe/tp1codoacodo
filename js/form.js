const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const mail = document.getElementById('mail')
const telefono = document.getElementById('telefono')
const texto = document.getElementById('texto')
const form = document.getElementById('consulta')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (nombre.value === '' || nombre.value == null || nombre.value.lenght <2) {
    messages.push('Escriba su nombre')
  }
  if (apellido.value === '' || apellido.value == null || apellido.value.lenght <2) {
    messages.push('Escriba su apellido')
  }  
  if (mail.value === '' || mail.value == null) {
    messages.push('Ingrese un mail válido')
  }  
  if (telefono.value.lenght <10 || telefono.value.lenght >10) {
    messages.push('Teléfono inválido')
  }  
  if (texto.value === '' || texto.value == null) {
    messages.push('Ingrese su consulta')
  }  
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
    
    
    
    

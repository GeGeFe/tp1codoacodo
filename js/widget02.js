// Frase del día 1.0
const direccion = "https://frasedeldia.azurewebsites.net/api/phrase"
//const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const proxyUrl = "https://proxy.cors.sh/"
//const direccion = "https://randomuser.me/api"

async function obtenerFrase() {
    try {
        const respuesta = await fetch(proxyUrl + direccion)
        const datos = await respuesta.json()
        document.getElementById('textowg02').innerHTML = "La frase del día es: " + datos.phrase + " de " + datos.author;
    } catch (error) {
        document.getElementById('textowg02').innerHTML = "La frase del dia es: No estoy inspirado";
    }

}

obtenerFrase();
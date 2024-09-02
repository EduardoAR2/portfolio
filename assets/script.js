let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("adaptabilidad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("gestion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 



















/**--------------------------------------------------------------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const mensaje = document.getElementById("message");
const boton = document.getElementById("enviar");

const alert1 = document.getElementById("mensaje1");
const alert2 = document.getElementById("mensaje2");
const alert3 = document.getElementById("mensaje3");

boton.addEventListener("click", (event) => {
    event.preventDefault();
    let valid = true;
    alert1.textContent = ""; 
    alert2.textContent = ""; 
    alert3.textContent = ""; 

    if (nombre.value.trim() === "") {
        alert1.textContent = "Nombre es obligatorio";
        valid = false;
    }

    if (correo.value.trim() === "") {
        alert2.textContent = "Correo es obligatorio";
        valid = false;

    }
    else if (!validateEmail(correo.value.trim())) {
        alert2.textContent = "Ingrese un correo válido";
        valid = false;
    }
    if(mensaje.value.trim() === ""){
        alert3.textContent = "Mensaje es obligatorio";
        valid = false;

    }

    if (valid) {
        document.getElementById("formu").submit(); // Enviar el formulario si es válido
    }

});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


});



let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu-bar');
    
  menu_bar.addEventListener('click', function() {
    menu.classList.toggle("menu-toggle");
    
  });

// Guardamos nuestro botón en una variable
var boton = document.querySelector('.btn-action');

// Asignamos el evento Click a nuestro botón
boton.addEventListener('click', function(){
  
  // Guardamos los inputs en una variable
  var nombre = document.querySelector('.nombre');
  var email = document.querySelector('.correo');
  var expresion = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  var mensaje = document.querySelector('.mensaje');

  // Validamos nuestros campos que no estén vacíos
  // El .value extrae los valores de ese input
  if(nombre.value == ""){ 
    // El .focus() permite enfocar el campo
     nombre.focus();
    alert("Por favor, escribe tu nombre completo.");
    return false;
     }else if(email.value == "" || !expresion.test(email)){
       email.focus();
       alert("Ingresa tu correo.");
       return false;
     }else if(mensaje.value == ""){
       mensaje.focus();
       alert("Escribe tu mensaje.");
       return false;
     }else{
       // Aquí puedes obtener los datos y realizar lo que quieras
       alert("¡Felicidades, has enviado tu mensaje!");
       console.log("Nombre: " + nombre.value + "\nMensaje: " + mensaje.value);
     }
});
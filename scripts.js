
let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu-bar');
    
  menu_bar.addEventListener('click', function() {
    menu.classList.toggle("menu-toggle");
    
  });


var boton = document.getElementById("enviar");


boton.addEventListener('click', function(){
  

  var nombre = document.getElementById('nombre');
  var email = document.getElementById('correo');
  
  var mensaje = document.querySelector('.mensaje');

 
  if(nombre.value == ""){ 
    
     nombre.focus();
    alert("Por favor, escribe tu nombre completo.");
    return false;
     }else if(email.value == "" ){
       email.focus();
       alert("Ingresa tu correo.");
       return false;
     }
     else{
       
       alert("¡Felicidades, has enviado tu mensaje!");
       console.log("Nombre: " + nombre.value + "\nMensaje: " );
     }
});
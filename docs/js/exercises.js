"use strict";
// Pedir nombre al usuario y saludarlo.
const $ejer0 = document.getElementById("ejer0");

$ejer0.addEventListener("submit", (addEventListener) => {
  event.preventDefault();
  const nombre = ` ${$ejer0.name.value}`;
  if (nombre === null) {
    alert(":( No escribiste tu nombre.");
  } else {
    alert("Hola," + nombre);
  }
});


// Pedir edad al usuario y responder si es o no es mayor de edad.
const $ejer2Form=document.getElementById("ejercicio2");
const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2');
$ejer2Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    esMayorDeEdad();
    
});

function esMayorDeEdad(){
    const edad=$ejer2Form.edad.value;
    if(edad.length==0 || /^\s+$/.test(edad) ){
      alert2('Debe ingresar su edad.','danger' );
    }
    else if(edad>=18){
      alert2('El usuario es mayor de edad.','info' );
    }
    else {
      alert2('El usuario NO es mayor de edad.','warning' );
    }

}
const alert2 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-sucess alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder2.append(wrapper);
}
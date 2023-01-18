"use strict";
// Pedir nombre al usuario y saludarlo.
const $exer0 = document.getElementById("exer0");

$exer0.addEventListener("submit", (addEventListener) => {
  event.preventDefault();
  const nombre = ` ${$exer0.name.value}`;
  if (nombre === null) {
    alert(":( No escribiste tu nombre.");
  } else {
    alert("Hola," + nombre);
  }
});
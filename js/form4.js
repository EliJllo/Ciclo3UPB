
function validar_nombre(string) {
    
    var nombre = string;
    /*var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;*/
    var expresion_especiales = /[@!_/\-]+/;
    var expresion_numeros = /[0-9]+/;

    if (nombre == "" || nombre.length == 0) {
      alert("Nombre obligatorio");
      console.log ("false")
      return false;
      }

    if (nombre.length < 4 ) {
      alert("El nombre debe tener una logítud mínima de 4 caracteres");
      console.log ("false")
      return false;
      }

    if (nombre.length >= 30 ) {
      alert("El nombre debe tener una longitud maxima de 30 caracteres");
      console.log ("false")
      return false;
      }

    if (expresion_especiales.test(nombre)){
      alert("El nombre no debe tener caracteres especiales");
      console.log ("false")
      return false;
      }

    if (expresion_numeros.test(nombre)){
      alert("El nombre no debe tener números");
      console.log ("false")
      return false;
      }
 
   return true
    
}

function validar_contrasenas(string1,string2) {
  
    
    var password = string1;
    var confirma_password = string2;
     

    if (password == "" || password.length == 0  ) {
      alert("La contraseña es obligatoria");
      console.log ("false")
      return false;
      }

    if (confirma_password == "" || confirma_password.length == 0 ) {
      console.log ("false")
      alert("Debes confirmar tu contraseña");
      return false;
      }
    
    if (password.length  != confirma_password.length ) {
      alert("Las contraseñas no son iguales");
      console.log ("false")
      return false;
      }

    if (password != confirma_password ) {
      alert("Las contraseñas no son iguales");
      console.log ("false")
      return false;
      }

  console.log("true")
  return true;

}

module.exports.validar_nombre = validar_nombre;
module.exports.validar_contrasenas = validar_contrasenas;

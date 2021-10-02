
function validar_nombre(string) {
    
    var nombre = string;
    var long_nombre = nombre.trim().length;
    /*var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;*/
    var expresion_especiales = /[@!_/\-]+/;
    var expresion_numeros = /[0-9]+/;

    if (long_nombre == 0 ) {
        document.getElementById("errorNombre").innerText = '*El nombre es obligatorio';
        return false;
      }

    if (long_nombre < 4 ) {
        document.getElementById("errorNombre").innerText = '*El nombre debe tener una longitud mayor a 4';
        return false;
      }

    if (long_nombre >= 30 ) {
        document.getElementById("errorNombre").innerText = '*El nombre debe tener una longitud maxima de 30 caracteres';
        return false;
      }

    /*if (!expresion.test(nombre)){
        document.getElementById("errorNombre").innerText = '*No se permiten caracteres especiales ni números';
        return false;
      }*/
    if (expresion_especiales.test(nombre)){
        document.getElementById("errorNombre").innerText = '*No se permiten caracteres especiales';
        return false;
      }

    if (expresion_numeros.test(nombre)){
        document.getElementById("errorNombre").innerText = '*No se permiten números';
        return false;
      }
 
   
    return true;
}

function validar_contrasenas(string1,string2) {
  
    
    var password = string1;
    var confirma_password = string2;
    var long_pass = password.trim().length;
    var long_confirma_pass = confirma_password.trim().length;
   

    if (long_pass == 0 ) {
        document.getElementById("errorPassword").innerText = '*La contraseña es obligatoria';
        return false;
      }

    if (long_confirma_pass == 0 ) {
        document.getElementById("errorConfirmaPassword").innerText = '*Debes confirmar tu contraseña';
        return false;
      }
    
    if (long_pass != long_confirma_pass ) {
        document.getElementById("errorConfirmaPassword").innerText = '*Las contraseñas no son iguales';
        return false;
      }

    if (password.trim() != confirma_password.trim() ) {
        document.getElementById("errorConfirmaPassword").innerText = '*Las contraseñas no son iguales';
        return false;
      }

    
   return true;

}

/*module.exports.validar_nombre = validar_nombre;
module.exports.validar_contrasenas = validar_contrasenas;*/

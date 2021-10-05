
function validar_nombre(string) {
    
    var campoNombre = document.getElementById("campoNombre").value;
    console.log(campoNombre);
    //var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
    var expresion_especiales = /[@!_/\-]+/;
    var expresion_numeros = /[0-9]+/;

    //Debe tener una longitud mayor a 4
   if (campoNombre.length < 4 ) {
      alert("El nombre debe tener una logítud mínima de 4 caracteres");
      console.log ("false")
      return false;
      }

    //Debe tener una longitud máxima de 30 caracteres
    else if (campoNombre.length >= 30 ) {
      alert("El nombre debe tener una longitud maxima de 30 caracteres");
      console.log ("false")
      return false;
      }

    //No puede tener ningún caracter especial como '@','!','-','/'
    else if (expresion_especiales.test(campoNombre)){
      alert("El nombre no debe tener caracteres especiales");
      console.log ("false")
      return false;
      }

    //No puede tener ningún número
    else if (expresion_numeros.test(campoNombre)){
      alert("El nombre no debe tener números");
      console.log ("false")
      return false;
      }

    //si pasa todas las validaciones
    else{
      console.log ("true")
      return true;
      }
   
    
}

function validar_contrasenas(string1,string2) {
  
    
    var campoContrasena = string1; //document.getElementById("campoContrasena").value;
    console.log(campoContrasena);
    var campoConfirmarContrasena = string2; //document.getElementById("campoConfirmarContrasena").value;
    console.log(campoConfirmarContrasena);
     
    if(campoContrasena === null || campoConfirmarContrasena === null ){

        alert("La contraseña es obligatoria");
        console.log ("false")
        return false;

       }else{
      
        if (campoContrasena == "" || campoContrasena.length == 0  ) {
          alert("La contraseña es obligatoria");
          console.log ("false")
          return false;
          }
        
          else if (campoConfirmarContrasena == "" || campoConfirmarContrasena.length == 0 ) {
          console.log ("false")
          alert("Debes confirmar tu contraseña");
          return false;
          }
        
        else if (campoContrasena.length  != campoConfirmarContrasena.length ) {
          alert("Las contraseñas no son iguales");
          console.log ("false")
          return false;
          }

        else if (campoContrasena != campoConfirmarContrasena ) {
          alert("Las contraseñas no son iguales");
          console.log ("false")
          return false;
          }
        
          else{ console.log("true")
          return true;}

     
      }
 
}

module.exports.validar_nombre = validar_nombre;
module.exports.validar_contrasenas = validar_contrasenas;

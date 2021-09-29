
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
 
    console.log("nombre: "+nombre);
    console.log(long_nombre);
    alert("Datos enviados");
    return true;
}

function validar_contrasenas(string) {

}

/*module.exports.validar_nombre = validar_nombre;
module.exports.validar_contrasenas = validar_contrasenas;*/

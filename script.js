function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    var resultado = document.getElementById("resultado");

    
    if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
        resultado.textContent = "Error: completa todos los campos";
        resultado.style.color = "red";
    } else if (correo.indexOf("@") === -1) {
       
        resultado.textContent = "Error: el correo no es válido";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "¡Gracias " + nombre + "! Tu mensaje fue enviado";
        resultado.style.color = "green";
    }
}
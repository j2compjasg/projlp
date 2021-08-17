function validar(){
    var codigo,
        nombre,
        rut, 
        email,       
        fono,
        saludo;
        
    codigo = document.getElementById("Codigo").value;
    nombre = document.getElementById("Nombre").value;
    rut = document.getElementById("rut").value;
    email = document.getElementById("email").value;
    fono = document.getElementById("fono").value;

    expresion = /\w+@\w+\.+[a-z]/;  // declaramos una expresion regular para validar el campo correo electrónico

    if (codigo=== "" ||  nombre === "" || rut === "" || email === "" || fono ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (codigo.length !==8) {
        alert("El Código debe ser de 8 dígitos")
        return false;
    }

    else if (nombre.length>50){
        alert("El nombre es muy largo");
        return false;
    }
    else if (email.length>100){
        alert("El correo es muy largo");
        return false;
    }
    else if (!expresion.test(email)){
        alert("El correo no es válido");
        return false;
    }
    else if (fono.length>15){
        alert("El teléfono es muy largo");
        return false;
    }
    else if (isNaN(fono)){
        alert("El teléfono ingresado no es número");
        return false;
    }

    var saludo = "Bienvenido " + nombre  + "!!!. Ya estás participando por La experiencia Cervecera de Helmut Scheu." ;
    console.log(saludo);
    alert(saludo);
}
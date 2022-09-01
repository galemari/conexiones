function cambieNombre(elemento_h1){
    if(elemento_h1.innerText === "Jane Doe"){
        elemento_h1.innerText = "Mariana Lopez"
    }else {
        elemento_h1.innerText = "Jane Doe"
    }
}

function elimine(elemento_boton){
    elemento_boton.remove();
}
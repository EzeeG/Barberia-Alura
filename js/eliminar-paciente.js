var pacientes = document.querySelectorAll(".paciente")
//console.log(pacientes);
var tabla = document.querySelector("#tabla-pacientes")
tabla.addEventListener("click", function(event){
    event.target.parentNode.classList.add("fade-out")
    setTimeout(function(){
        event.target.parentNode.remove();
}, 250);
})


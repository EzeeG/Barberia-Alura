var filtro = document.querySelector("#filtrar-tabla") ;

filtro.addEventListener("input", function(event){
    
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value, "i");
    
            if (!expresion.test(nombre)) {
                paciente.classList.add("invisible")
            } else {
                paciente.classList.remove("invisible")
            }
        }
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }
})
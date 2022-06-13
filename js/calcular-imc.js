var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

for(i = 0; i < pacientes.length; i++) {

    paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var imc;
        
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc ;
    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);


    if(!pesoEsValido) {
        tdImc.textContent = "el peso esta incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(!alturaEsValida) {
        tdImc.textContent = "la altura esta incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
        
    }
        
    if((pesoEsValido) && (alturaEsValida)){
        //console.log(imc);
        
        tdImc.textContent = calcularImc(peso, altura)
    }
}
function calcularImc(peso, altura) {
    imc = peso / (altura * altura);
    return parseInt(imc);
}
function validarPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else {
            return false
        }
        
}
function validarAltura(altura) {
    if(altura >= 0 && altura <= 10) {
        return true;
    } else {
        return false;
    }
}
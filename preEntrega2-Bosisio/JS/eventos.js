
//ME CONECTO CON EL IMPUT DNI PARA BUSCAR RESERVAS
let btnConsultarDni = document.getElementById("btnConsultarDni")
btnConsultarDni.addEventListener("click", verificarReservasUsuario)

//ME CONECTO CON EL OPTION DIA Y HORA
const diasHabilitados = document.querySelector("#diasHabilitados")
const horasHabilitadas = document.querySelector("#horasHabilitadas")


//RELACIONO EL NOMBRE Y EL DNI 
const nombreUsuario = document.getElementById("nombre")
const dniUsuario = document.getElementById("dni")

//BOTON PARA ELEGIR LAS OPCIONES SELECCIONADAS X EL USUARIO
const btnConfirmar = document.getElementById("btnConfirmar")
btnConfirmar.addEventListener("click", mostrarReserva)

//ACA GENERO SE CARGUEN LAS OPCIONES QUE ELIGIO EL USUARIO
const resultadoUs = document.querySelector("#resultadoUs")

const resultadoFinal = document.querySelector("#resultadoFinal")



//BOTON PARA IR A PAGAR--- ACA TENGO PENDIENTE ARMAR BIEN TODO EL TEMA DE PAGOS Y LA CAJA
const btnPagar = document.getElementById("btnPagar")
btnPagar.addEventListener("click", () => { location.href = "pago.html" })







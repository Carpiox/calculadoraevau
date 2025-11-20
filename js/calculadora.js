let calcular = document.getElementById("calcular");

function validarNumero(input){
  // El span está justo después del input
  let mensaje = input.nextElementSibling;

  let valor = input.value;

  // Reset
  mensaje.style.display = "none";
  mensaje.textContent = "";

  if (valor === "") return;

  let num = parseFloat(valor);

  // Rango permitido
  if (num < 5 || num > 10){
    mensaje.textContent = "El valor debe estar entre 5 y 10.";
    mensaje.style.display = "inline";
    return;
  }

  // Máximo 2 decimales
  if (valor.includes(".")){
    let partes = valor.split(".");
    if (partes[1].length > 2){
      mensaje.textContent = "Máximo 2 decimales.";
      mensaje.style.display = "inline";
    }
  }
}



calcular.addEventListener("click", () => {

  function convertirNumero(valor){
    if (!valor) return NaN;
    return parseFloat(valor.replace(",","."));
  }

  // Nota media Bachillerato
  let notaBachiller = convertirNumero(document.getElementById("mediaBach").value);

  // Fase obligatoria
  let lengua = convertirNumero(document.getElementById("lengua").value);
  let historia = convertirNumero(document.getElementById("historia").value);
  let ingles = convertirNumero(document.getElementById("ingles").value);
  let optativa = convertirNumero(document.getElementById("optativa").value);

  // Calcular media obligatoria
  let mediaObligatoria =
    (parseFloat(lengua) + parseFloat(historia) + parseFloat(ingles) + parseFloat(optativa)) / 4;

  // Fase voluntaria
  let ponderacion1 = convertirNumero(document.getElementById("ponderacion1").value);
  let notaPonderacion1 = convertirNumero(document.getElementById("notaPonderacion1").value);

  let ponderacion2 = convertirNumero(document.getElementById("ponderacion2").value);
  let notaPonderacion2 = convertirNumero(document.getElementById("notaPonderacion2").value);

  // Calcular nota general (sobre 10)
  let notaGeneral = (0.6 * parseFloat(notaBachiller)) + (0.4 * mediaObligatoria);

  // Calcular nota sobre 14 (admisión)
  let notaSobre14 =
    notaGeneral +
    (parseFloat(ponderacion1) * parseFloat(notaPonderacion1)) +
    (parseFloat(ponderacion2) * parseFloat(notaPonderacion2));

  // Mostrar resultados
  let notaCalculada = document.getElementById("notaCalculada");

  // Limpia el texto anterior antes de mostrar el nuevo resultado
  notaCalculada.innerHTML = "";

  // Si las ponderaciones no se han rellenado, muestra solo la nota sobre 10
  if (isNaN(notaSobre14)) {
    notaCalculada.innerHTML = "Nota calculada: " + notaGeneral.toFixed(2) + " /10";
  } else {
    notaCalculada.innerHTML = "Nota calculada: " + notaSobre14.toFixed(2) + " /14";
  }

});

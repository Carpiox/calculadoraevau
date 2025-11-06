let calcular = document.getElementById("calcular");

calcular.addEventListener("click", () => {

  // Nota media Bachillerato
  let notaBachiller = document.getElementById("mediaBach").value;

  // Fase obligatoria
  let lengua = document.getElementById("lengua").value;
  let historia = document.getElementById("historia").value;
  let ingles = document.getElementById("ingles").value;
  let optativa = document.getElementById("optativa").value;

  // Calcular media obligatoria
  let mediaObligatoria =
    (parseFloat(lengua) + parseFloat(historia) + parseFloat(ingles) + parseFloat(optativa)) / 4;

  // Fase voluntaria
  let ponderacion1 = document.getElementById("ponderacion1").value;
  let notaPonderacion1 = document.getElementById("notaPonderacion1").value;

  let ponderacion2 = document.getElementById("ponderacion2").value;
  let notaPonderacion2 = document.getElementById("notaPonderacion2").value;

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

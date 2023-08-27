function contarCaracteres() {
    const textarea = document.getElementById("#dTextArea");
    const contadorInput = document.getElementById("#contador");

    const texto = textarea.value;
    const numeroCaracteres = texto.length;

    contadorInput.value = numeroCaracteres;
  }
  
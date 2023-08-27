function verificar () {
const numeroInput = document.querySelector("#dInput");
const resultado=document.querySelector("#dExibir");

const numero = parseInt(numeroInput.value);


if (!isNaN(numero)) {
    let numerosImpares = "Números ímpares entre 0 e " + numero + ":<br>";
  
  
  for (let i = 1; i <= numero; i += 2) {
    numerosImpares += i + "<br>";
  }
  resultado.innerHTML = numerosImpares;
} else {
    resultado.innerHTML = "Número inválido. Por favor, informe um número válido.";
}

}
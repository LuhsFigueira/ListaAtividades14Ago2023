function copiar () {
    const frase = document.querySelector("#dInput").value;
    const resultado=document.querySelector("#dExibir");

    resultado.innerHTML = frase;
}
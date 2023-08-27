function verificar () {
    let numero = document.querySelector("#dInput").value;
    const resultado=document.querySelector("#dExibir");


    if(numero > "0") {
        resultado.innerHTML = "O numero "+ numero + " é maior que zero";
    } else if (numero === "0") {
        resultado.innerHTML = "O numero "+ numero + " é igual a zero";
    } else if (numero < "0") {
        resultado.innerHTML = "O numero "+ numero + " é menor que zero";
    }
    
}
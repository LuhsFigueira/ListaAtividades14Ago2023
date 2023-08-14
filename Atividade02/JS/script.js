function inserirNum () {
    
    numeros = []; 
    for(i=0;i<2;i++) {
        
        numero = parseInt( prompt("Insira um numero : "));
        numeros.push(numero);
    }
    
    document.write("Os numeros digitados foram: "+numeros.sort((a, b) => a - b));
}
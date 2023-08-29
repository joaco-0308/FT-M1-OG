function BinarioADecimal(num){
    let suma = 0;

    for(let i = 0; i < num.length; i++){
        suma = suma + Math.pow(2, num.length - 1 - i) * num[i]

    }
    return suma;
}


//--------------------------------------------------------------------------------
function DecimalABinario(num){
    let binario = [];

    while(num > 0){
        binario.unshift(num % 2);
        num = Math.floor(num / 2);
    }
    return binario.join("");
}
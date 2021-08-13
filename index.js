function converte(letras) {
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var codigos = [];
    for (var i in letras) {
        codigos.push(alfabeto.indexOf(letras[i].toUpperCase()) + 1);
    }
    return codigos;
}

function soma (bloco,tamanhoSecret) {
    var somas = [];
    for (const dados of bloco){
        somas.push(dados + tamanhoSecret);
    }
    return somas;
}

function encripto (dadosVeiculo, secret) {

    const tamanhoSecret = secret.length;
   
    const blocoA = Number(dadosVeiculo.slice(0,1)) + tamanhoSecret;

    const blocoB = dadosVeiculo.slice(1,3);
    const blocoBConvertido = converte(blocoB);
    const blocoBFinal = soma(blocoBConvertido,tamanhoSecret);

    const blocoC = dadosVeiculo.slice(3,8);
    const blocoCConvertido = converte(blocoC);
    const blocoCFinal = soma(blocoCConvertido,tamanhoSecret);

    const blocoD = dadosVeiculo.slice(8,9);
    const blocoDConvertido = converte(blocoD);
    const blocoDFinal = soma(blocoDConvertido,tamanhoSecret);

    const blocoE = dadosVeiculo.slice(9,10);
    const blocoEConvertido = converte(blocoE);
    const blocoEFinal = soma(blocoEConvertido,tamanhoSecret);

    const blocoF = dadosVeiculo.slice(10,11);
    const blocoFConvertido = converte(blocoF);
    const blocoFFinal = soma(blocoFConvertido,tamanhoSecret);

    const blocoG = Number(dadosVeiculo.slice(11,18)) + tamanhoSecret;
   
    const result = blocoA + blocoBFinal + blocoCFinal + blocoDFinal + blocoEFinal + blocoFFinal + blocoG;

    console.log(result);
    //return result;
}

function decripto (dadosConvertido, secret) {
    const tamanhoSecret = secret.length;

    //Ir fazendo o inverso de cada operação para descriptografar o dado do VIN;

}


encripto('1HGBH41JXMN109186','selecionadoPelaFord');

decripto('2027,2627,2627,2627,2627,26109205','selecionadoPelaFord');
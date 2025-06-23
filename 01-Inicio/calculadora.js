function soma(a, b) {
    return a + b;
}

function mult(a,b){
    return a*b;
}

function sub(a,b){
    return a - b ;
}

function div(a,b){
    return a/b;
}

//Criado um objeto e realizado a exportação de todas as funções
module.exports = {
    soma, //shorthand property names
    mult,
    div,
    sub
};
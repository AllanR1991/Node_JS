var http = require("http"); //O Modulo http ja vem com o node.

http.createServer(function(requisição, resposta) {
    resposta.end("Bem vindo ao meu site");
}).listen(8080);// Criando um servidor com node.

console.log("Meu servidor está rodando!");
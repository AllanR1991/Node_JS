var http = require("http"); //O Modulo http ja vem com o node.

http.createServer(function(requisição, resposta) {
    resposta.end("<h1>Bem vindo ao meu site</h1><br><h4>guiadoprogramador.com</h4>");
}).listen(8080);// Criando um servidor com node.

console.log("Meu servidor está rodando!");
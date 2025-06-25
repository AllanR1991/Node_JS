const express = require("express"); //importando o express para nosso projeto.

const app = express(); // iniciando o express.
const porta = 4000

//Criando rota para evitar a mensagem de "cannot get" ao rodar o servidor, devolvendo uma respopsta para a rota
app.get("/",function(req, res){
    //Cada rota deve ter apenas uma rota
        
    res.send("<h1>Bem vindo ao guia do programador</h1>")//Resposta da pagina pode ser um arquivo um html entre outros

    //Após ja ter enviado a respota para rota é como se a conexão estivese sido encerrada não sendo possivel enviar as demais solicitações
    //res.send("Outra resposta")
});

app.get("/blog", function (req, res){
    res.send("Bem vindo ao meu blog!");
})

app.get("/canal/youtube", function(req,res){
    res.send("<h1>Bem vindo ao meu canal!</h1>");
})


app.get("/ola/:nome/:empresa", function(req,res){
    // REQ => Dados enviados pelo usuario
    // RES => Respota que vai se enviada para o usuário
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send(`<h1>Oi ${nome} do ${empresa}!</h1>`)
})

app.listen(porta,function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})

//Após instalado o nodemon basta rodarmos o nodemon atraves do comando [nodemon "arquivo"] ai o servidor passa a ser recarregado automaticamente.
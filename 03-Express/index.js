const express = require("express"); //importando o express para nosso projeto.

const app = express(); // iniciando o express.


//Criando rota para evitar a mensagem de "cannot get" ao rodar o servidor
app.get("/",function(req, res){
    
});


app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})
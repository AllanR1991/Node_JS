//Importando o express
const express = require("express")
//Criando uma instancia do express
const app = express();
const porta = 8080;

//Estou dizendo ao express para usar o EJS como view engine
app.set('view engine','ejs')

app.get("/",(req,res) => {
    //res.send("Bem vindo ao meu Projeto!");

    //Não é necessrio passar a rota pois ao usar res.render ele ja olha obrigatóriamente para a pasta views
    res.render("principal/perfil")
});

app.listen(porta,()=>{
    console.log(`App rodando! http://localhost:${porta}`);
});
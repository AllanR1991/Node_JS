//Importando o express
const express = require("express")
//Criando uma instancia do express
const app = express();
const porta = 8080;

//Estou dizendo ao express para usar o EJS como view engine
app.set('view engine','ejs')

app.get("/:nome/:lang",(req,res) => {
    //res.send("Bem vindo ao meu Projeto!");


    var nome = req.params.nome; //Pegando os paramentos informados pelo cliente e atribuido os valores.
    var lang = req.params.lang;

    var exibeMsg = true;


    //Não é necessrio passar a rota pois ao usar res.render ele ja olha obrigatóriamente para a pasta views
    res.render("index", {
        nome,
        lang,
        empresa: "Guia do Programador",
        incritos: 8000,
        exibeMsg
    })
});

app.listen(porta,()=>{
    console.log(`App rodando! http://localhost:${porta}`);
});
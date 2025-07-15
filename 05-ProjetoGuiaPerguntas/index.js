//Importando o express
const express = require("express")
//Criando uma instancia do express
const app = express();
const porta = 8080;

const bodyParser = require("body-parser");
// Importando o body-parser, que é um middleware para tratar os dados enviados no corpo (body) da requisição HTTP (ex: de um formulário).


app.set('view engine','ejs')
// Estou dizendo ao express para usar o EJS como view engine

app.use(express.static('public')); 
// Configurando a aplicação para servir arquivos estáticos (como imagens, CSS, JS) da pasta "public".

app.use(bodyParser.urlencoded({extended:false}))
/* 
  Middleware para ler dados enviados de formulários (method="POST").
  - extended: false => permite apenas objetos simples (sem aninhamento de dados).
  Ex: nome=Allan&idade=25 será convertido em { nome: 'Allan', idade: '25' }
*/
app.use(bodyParser.json());
/*
  Middleware para ler dados enviados em JSON no corpo da requisição (geralmente via JavaScript/AJAX).
  Ex: { "nome": "Allan", "idade": 25 }
*/

/*
Middleware = "intermediário" entre o pedido do cliente e a resposta do servidor.
Ele processa, filtra, valida, ou transforma os dados durante esse caminho.
*/

app.get("/",(req,res) => {
    
    res.render("index")
});

app.get("/perguntar",(req, res)=>{
    res.render("perguntar");
})

app.post("/salvarpergunta", (req,res)=>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao

    res.send(`Formulario recebido. ${titulo} ${descricao}`)
})

app.listen(porta,()=>{
    console.log(`App rodando! http://localhost:${porta}`);
});
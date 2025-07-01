//Importando o express
const express = require("express")
//Criando uma instancia do express
const app = express();
const porta = 8080;

//Estou dizendo ao express para usar o EJS como view engine
app.set('view engine','ejs')
app.use(express.static('public')); //Configurando a aplicação para carregar arquivos staticos, imagem, css.

app.get("/",(req,res) => {
    
    res.render("index")
});

app.listen(porta,()=>{
    console.log(`App rodando! http://localhost:${porta}`);
});
//Configuração do uso do express no meu server
const express = require("express");
const server = express();

const nunjucks = require("nunjucks");

//Cofigurar rota para o express encontrar arquivos estáticos(css, imgs, scripts)
server.use(express.static("public"))

//Configurando o nunjucks
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

const projetos = [
    {
        img: "https://cdn-icons-png.flaticon.com/512/821/821756.png",
        title: "O advento de battle royalle, um estudo sobre Free Fire",
        category: "Administração",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/2743/2743904.png",
        title: "Por que a Terra NÃO é plana?",
        category: "Ciências",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/4668/4668541.png",
        title: "Satélite caseiro",
        category: "Engenharia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/3306/3306604.png",
        title: "Vida Extraterrestre",
        category: "Ufologia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    }
    ,
    {
        img: "https://cdn-icons-png.flaticon.com/512/808/808439.png",
        title: "Como os Video Games inspiram nossa criatividade",
        category: "Games",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    }
]


//Configurar Rotas
// 1 - rota raiz (/)...
server.get("/",function(req, res){
    const saudacao = "Oi do backend pela segunda vez";
    console.log("Servidor do Alef!");
    return res.render("index.html", { projetos });
});


// 2 - Rota para pag projetos (/projetos)
server.get("/projetos", function(req, res){
    return res.render("projects.html", { projetos });
});

//"Ligamos" nosso servidor na porta 3001
server.listen(3001);







//- Verifique se o Node esta instalado com o comando:
//node -v
//- Para iniciar um projeto com o Node:
//npm init -y
//npm é um gerenciador de pacotes (yarn, chocolatey)
//Instalar o express no projeto com o  comando
//npm i express
//Express serve para criarmos servidores
//Instalar nodemon:
//npm i nodemon
//Alterar package.json:
//start: "nodemon server.js"
//Executar nosso servidor via nodemon:
//npm start
//Nodemon serve para reiniciar automaicamente nosso servidor, quando houver atualização no código
//Nunjucks serve para deixar nosso código HTML mais dinâmico
//npm i nunjucks


//Frontend
// É a parte do seu site/sistema que o usuário interage

// Backend
// É a parte do site/sistema que o usuário não tem acesso
// mas que controla todo o nosso sistema
// Responsibilidades:
// - Receber pedido do cliente (frontend)
// - Devolver resposta ao cliente
// - Regras negócio (como as coisas devem ser apresentadas no front/dados na resposta)
// - Trata dos dados (persistência, tratamento)
// Tecnologias
// Banco de Dados
// Node.js:
// Motor de javascript p/ o nosso computador
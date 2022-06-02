// Código em JavaScript
// Comportamento pro meu site

function onOff(){
    //Função que retira a classe hide do Modal quando ela existe
    // e aplica a classe hide quando ela não existe
    document
    .querySelector("#modal")
    .classList
    .toggle("hide");

    //Fazer com que o scroll fique desabilitado 
    // quando o modal está na tela
    // 1 - acesse o elemento pelo ID 
    // 2 - aplique a classe que corrigiria o problema
    // --O que em CSS corrigiria o problema?
    document
    .querySelector("body")
    .classList
    .toggle("hideScroll");

    //Aplicar scoll qnd o modal está na tela
    // e tem zoom
    document
    .querySelector("#modal")
    .classList
    .toggle("addScroll");
    
}

//CRIANDO A VARIAVEL PARA A DIV COM O CONTEUDO QUE SERÁ CARREGADO
var animalContainer = document.getElementById("animal-info");
//CRIANDO A VARIAVEL DO BOTÃO
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    //SETANDO A VARIAVEL DE REQUISIÇÃO
    var myRequest = new XMLHttpRequest();
    //PEGANDO AS INFORMAÇÕES DO JSON
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    //CARREGANDO AS INFORMAÇÕES DO JSON
    myRequest.onload = function(){
        var myData = JSON.parse(myRequest.responseText);
        renderHTML(myData);
    };
    //ENVIANDO AS INFORMAÇÕES DO JSON
    myRequest.send();
});

//RENDERIAR O HTML NA PÁGINA

function renderHTML(data){
    var htmlString = ""
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}



//VARIÁBVEL DE CONTADOR
var pageCounter = 1;
//CRIANDO A VARIAVEL PARA A DIV COM O CONTEUDO QUE SERÁ CARREGADO
var animalContainer = document.getElementById("animal-info");
//CRIANDO A VARIAVEL DO BOTÃO
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    //SETANDO A VARIAVEL DE REQUISIÇÃO
    var myRequest = new XMLHttpRequest();
    //PEGANDO AS INFORMAÇÕES DO JSON
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    //CARREGANDO AS INFORMAÇÕES DO JSON
    myRequest.onload = function(){
        var myData = JSON.parse(myRequest.responseText);
        renderHTML(myData);
    };
    //ENVIANDO AS INFORMAÇÕES DO JSON
    myRequest.send();
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

//RENDERIZAR O HTML NA PÁGINA
function renderHTML(data){
    var htmlString = "";

    for (i=0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat "; 
        for(ii = 0; ii < data[i].foods.likes.length; ii++){
          if(ii == 0){
                htmlString += data[i].foods.likes[ii];
          }  else{
            htmlString += "and " + data[i].foods.likes[ii];
          }
        }

        htmlString += ' and dislikes ';
        for(ii = 0; ii < data[i].foods.likes.length; ii++){
          if(ii == 0){
                htmlString += data[i].foods.dislikes[ii];
          }  else{
            htmlString += "and " + data[i].foods.dislikes[ii];
          }
        }

    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}



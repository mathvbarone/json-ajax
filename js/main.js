//SETANDO A VARIAVEL DE REQUISIÇÃO
var myRequest = new XMLHttpRequest();
//PEGANDO AS INFORMAÇÕES DO JSON
myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//CARREGANDO AS INFORMAÇÕES DO JSON
myRequest.onload = function(){
    var myData = JSON.parse(myRequest.responseText);
    console.log(myData[0]);
};
//ENVIANDO AS INFORMAÇÕES DO JSON
myRequest.send();

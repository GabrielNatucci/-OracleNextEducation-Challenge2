var tela = document.querySelector("canvas");
var ctx = tela.getContext("2d");

console.log(tela)

ctx.strokeStyle = 'rgba(255,255,255,.7)';

function drawForca(){
    ctx.beginPath();
    ctx.moveTo(75,250);
    ctx.lineTo(75,0);
    ctx.lineTo(225,0);
    ctx.moveTo(225,0);
    ctx.lineTo(225,50);
    ctx.stroke();
}

function drawCabeca(){
    ctx.beginPath();
    ctx.arc(225, 70, 20, 0, 2*3.14);
    ctx.stroke();
}

function drawCorpo(){
    ctx.beginPath();
    ctx.moveTo(225,90);
    ctx.lineTo(225,180);
    ctx.stroke();
}

function drawBraco(){
    ctx.beginPath();
    ctx.moveTo(225,120);
    ctx.lineTo(260,90);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(225,120);
    ctx.lineTo(190,90);
    ctx.stroke();
}

function drawPe(){
    ctx.beginPath();
    ctx.moveTo(225,180);
    ctx.lineTo(260,210);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(225,180);
    ctx.lineTo(190,210);
    ctx.stroke();
}

// -- add funcionalidade do jogo -- //

start = document.getElementById("startgame");
add = document.getElementById("addpalavra");
tentar = document.getElementById("TentarLetra");
indicacao = document.getElementById("indicacaoId");
letra = document.getElementById("forcaletra");
tipo = document.getElementById("tipo");
palavras = document.getElementById("palavrasadd");
final = document.getElementById("partefinal");
indica = document.getElementsByClassName("indica");
document.getElementById("erroNone").classList.add("displayNone")
document.getElementById("erroPala").classList.add("displayNone")

final.classList.add("displayNone");

var frutas = ['Maçã', 'Banana','Goiaba','Coco'];
var vei = ['Metro', 'Carro','Moto','trem'];
var legumes = ['Batata','Baroa','Alho','Cebola'];
var time = ['Santos','Bahia','Ceará','Elche'];
var todos = [frutas,vei,legumes,time];

function aleatorizar(array){
    return Math.floor(Math.random()*array)
}

start.addEventListener("click", function(event) {
    indice = indica.length;
    final.classList.remove("displayNone");
    selecionado = todos[aleatorizar(4)]
    if (selecionado == frutas) document.getElementById("class").innerHTML = "Fruta";
    if (selecionado == vei) document.getElementById("class").innerHTML = "Tipo de veículo";
    if (selecionado == legumes) document.getElementById("class").innerHTML = "Legume";
    if (selecionado == time) document.getElementById("class").innerHTML = "Time";
    
    selecionadoPalavra = (selecionado[aleatorizar(selecionado.length)]);
    console.log(selecionadoPalavra);

    if (selecionadoPalavra.length - indice > 0){
        for (var i = 0; i < (selecionadoPalavra.length - indice) ; i++) {
            indicacao.innerHTML += '<p class = "indica"></p>';
        }
    } else {
        for (var i = 0; i > (selecionadoPalavra.length - indice) ; i--) {
            indica[i*-1].remove();
        }
    }
    
});

add.addEventListener("click", function(event) {
    event.preventDefault();
    if (tipo.value == "None"){
        document.getElementById("erroNone").classList.remove("displayNone")
    } else if (tipo.value == "Fruta"){
        document.getElementById("erroNone").classList.add("displayNone")
        if (palavras.value == ""){
            console.log(palavras.value);
            document.getElementById("erroPala").classList.remove("displayNone")
        } else {
            frutas.push(palavras.value);
            palavras.value = "";
            document.getElementById("erroPala").classList.add("displayNone")
        }
    } else if (tipo.value == "Vei"){
        document.getElementById("erroNone").classList.add("displayNone")
        if (palavras.value == ""){
            document.getElementById("erroPala").classList.remove("displayNone")
        } else {
            vei.push(palavras.value);
            palavras.value = "";
            document.getElementById("erroPala").classList.add("displayNone")
        }
    } else if (tipo.value == "Legume"){
        document.getElementById("erroNone").classList.add("displayNone")
        if (palavras.value == ""){
            document.getElementById("erroPala").classList.remove("displayNone")
        } else {
            legumes.push(palavras.value);
            palavras.value = "";
            document.getElementById("erroPala").classList.add("displayNone")
        }
    } else if (tipo.value == "Time"){
        document.getElementById("erroNone").classList.add("displayNone")
        if (palavras.value == ""){
            document.getElementById("erroPala").classList.remove("displayNone")
        } else {
            time.push(palavras.value);
            palavras.value = "";
            document.getElementById("erroPala").classList.add("displayNone")
        }
    }
});

tentar.addEventListener("click", function(event) {
    event.preventDefault();
    indicacao.innerHTML += '<p class = "indica"></p>';
}); 

drawForca();
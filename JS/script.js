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

function desfazerDesenho(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawForca();
}

// -- add funcionalidade do jogo -- //

var start = document.getElementById("startgame");
var add = document.getElementById("addpalavra");
var tentar = document.getElementById("TentarLetra");
var indicacao = document.getElementById("indicacaoId");
var indica = document.getElementsByClassName("indica");
var indicacaoerro = document.getElementById("indicacaoErroId");
var indicaerro = document.getElementsByClassName("indicaerro");
var letra = document.getElementById("forcaletra");
var tipo = document.getElementById("tipo");
var palavras = document.getElementById("palavrasadd");
var final = document.getElementById("partefinal");
var vitoria = document.getElementsByClassName("vitoria")[0];
var derrota = document.getElementsByClassName("derrota")[0];
var selecionadoPalavra = '';
var valida = 0;
var validaresp = 0;
var vez = 0;
document.getElementById("erroNone").classList.add("displayNone")
document.getElementById("erroPala").classList.add("displayNone")
vitoria.classList.add("displayNone");
derrota.classList.add("displayNone");

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
    letra.value = "";
    desfazerDesenho();
    console.log(indicaerro.length);
    for (var i = 0; i <= indicaerro.length + 1; i++) {
        try{
            indicaerro[0].remove();
        } catch (err){
            continue;
        }
    }
    vitoria.classList.add("displayNone");
    derrota.classList.add("displayNone");
    vez = 0;
    event.preventDefault();
    let indice = indica.length;
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
    for (var i = 0; i < indice ; i++) {
        try{
            indica[i].innerHTML = "";
        }
        catch(err){
            continue;
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
    valida = 0;
    validaresp = 0;
    event.preventDefault();
    
    if (vez < 4){
        vitoria.classList.add("displayNone");
        if (letra.value == ""){

        } else {
            for (var i = 0; i < selecionadoPalavra.length; i++){
                if (letra.value.toLowerCase() == selecionadoPalavra[i].toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "")){
                    indica[i].innerHTML = letra.value.toLowerCase();
                    valida += 1;
                }
            }
            if (valida == 0){
                indicacaoerro.innerHTML += '<p class = "indicaerro">'+letra.value.toLowerCase()+'</p>'
                if (vez == 0){
                    drawCabeca();
                } else if (vez == 1){
                    drawCorpo();
                } else if (vez == 2){
                    drawBraco();
                } else if (vez == 3){
                    drawPe();
                }
                vez = vez + 1;
            }
            letra.value = "";
        }
        for (var i = 0; i <selecionadoPalavra.length; i++) {
            if (indica[i].innerHTML.toLowerCase() == selecionadoPalavra[i].toLowerCase()) {
                validaresp += 1;
            }
        }
        if (validaresp == selecionadoPalavra.length) {
            vez = 4;
        }
        if (vez == 4){
            if (validaresp == selecionadoPalavra.length) {
                vitoria.classList.remove("displayNone");
            } else {
                derrota.classList.remove("displayNone");
            }
        }
    }
}); 

drawForca();
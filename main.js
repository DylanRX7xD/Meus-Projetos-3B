const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

for(let i= 0; i<botoes.length; i++){
    botoes[i].onclick = function (){

        for(j=0; j<botoes.length; j++){
            botoes[j].classList.remove('ativo')
            textos[j].classList.remove('ativo')
        }

        botoes[i].classList.add('ativo')
        textos[i].classList.add('ativo')
    } 
}

const contadores = document.querySelectorAll(".contador")

const tempoAtual = new Date(); //Retorna a data atual do computador
const tempoObjetivo1 = new Date("2024-04-04T00:00:00");

contadores[0].textContent = tempoObjetivo1 - tempoAtual


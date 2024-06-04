let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function editaTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    editaTextonaTela('h1', 'Jogo do número secreto');
    editaTextonaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
        editaTextonaTela('h1', 'Acertou');
        editaTextonaTela('p', 'Você descobriu o número secreto com '+tentativas+ ' '+palavraTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            editaTextonaTela('p', 'O número secreto é menor');
        }else{
            editaTextonaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limpaCampo();
    }
}

function gerarNumeroSecreto(){
    return parseInt(Math.random() * 100 +1);
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function botaoNovo(){
    numeroSecreto = gerarNumeroSecreto();
    exibirMensagemInicial();
    limpaCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
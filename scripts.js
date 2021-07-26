let prato;
let precoPrato;
let bebida;
let precoBebida;
let sobremesa;
let precoSobremesa;
let linkWpp = ""

function virgulaPonto(numVirgula) {
    const numPonto = numVirgula.replace(',','.');
    return numPonto;
}

function comidaPedida(elemento) {
    const jaEscolhido = document.querySelector(".prato.escolhido");
    const jaEscolhidoCheck = document.querySelector(".prato .ok");
    console.log(jaEscolhidoCheck);
    if (jaEscolhido !== null) {
        jaEscolhido.classList.remove("escolhido");
        jaEscolhidoCheck.classList.remove("ok");
        elemento.classList.add("escolhido");
        elemento.querySelector("ion-icon").classList.add("ok");
    }
    else {
        elemento.classList.add("escolhido");
        elemento.querySelector("ion-icon").classList.add("ok");
    }
    precoPrato = parseFloat(virgulaPonto(document.querySelector(".escolhido .preco-prato span").innerHTML));
    console.log(precoPrato);
    prato = document.querySelector(".escolhido .titulo-prato").innerHTML;
    console.log(prato);
    liberarCompra();
}
function bebidaPedida(elemento) {
    const jaEscolhido = document.querySelector(".bebida.escolhido");
    const jaEscolhidoCheck = document.querySelector(".bebida .ok");
    console.log(jaEscolhido);
    if (jaEscolhido !== null) {
        jaEscolhido.classList.remove("escolhido");
        jaEscolhidoCheck.classList.remove("ok");
        elemento.classList.add("escolhido");
        elemento.querySelector("ion-icon").classList.add("ok");
    }
    else {
        elemento.classList.add("escolhido");
        elemento.querySelector("ion-icon").classList.add("ok");
    }
    precoBebida = parseFloat(virgulaPonto(document.querySelector(".escolhido .preco-bebida span").innerHTML));
    console.log(precoBebida);
    bebida = document.querySelector(".escolhido .titulo-bebida").innerHTML;
    console.log(bebida);
    liberarCompra();
}

function sobremesaPedida(elemento) {
    const jaEscolhido = document.querySelector(".sobremesa.escolhido");
    const jaEscolhidoCheck = document.querySelector(".sobremesa .ok");
    console.log(jaEscolhido);
    if (jaEscolhido !== null) {
        jaEscolhido.classList.remove("escolhido");
        jaEscolhidoCheck.classList.remove("ok");
        elemento.classList.add("escolhido");
        elemento.querySelector("ion-icon").classList.add("ok");
        
    }
    else {
        elemento.classList.add("escolhido");
        elemento.querySelector("ion-icon").classList.add("ok");
    }
    precoSobremesa = parseFloat(virgulaPonto(document.querySelector(".escolhido .preco-sobremesa span").innerHTML));
    console.log(precoSobremesa);
    sobremesa = document.querySelector(".escolhido .titulo-sobremesa").innerHTML;
    console.log(sobremesa);
    liberarCompra();
}
function liberarCompra() {
    if (prato !== undefined && sobremesa !== undefined && bebida !== undefined ) {
        console.log("Ok");
        document.querySelector('.botao-desabilitado').classList.add('escondido');
        document.querySelector('.botao-habilitado').classList.remove('escondido');
    }else {console.log("Nao ok")}
}
function enviarPedido() {
    const total = (precoPrato + precoBebida + precoSobremesa).toFixed(2);
    const nome = prompt("Informe seu nome");
    const endereco = prompt("Agora, digite seu endereço");
    const mensagem = `a Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${total}
    
    Nome: ${nome}
    Endereço: ${endereco}`;
    console.log(mensagem);
    const msgWpp = encodeURIComponent(mensagem);
    linkWpp = "https://wa.me/5521979778806?text=" + msgWpp;
    document.querySelector(".bottom a").href = linkWpp;
}

function resumoPedido() {

}

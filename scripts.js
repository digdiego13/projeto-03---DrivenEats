let prato;
let precoPrato;
let bebida;
let precoBebida;
let sobremesa;
let precoSobremesa;
let linkWpp = ""
let total = 0;
//TRANSFORM COMMA TO DOT
function virgulaPonto(numVirgula) {
    let numPonto = numVirgula.replace(',','.');
    return numPonto;
}

// ARCHIVING FOOD VARIABLES

function comidaPedida(elemento) {
    let jaEscolhido = document.querySelector(".prato.escolhido");
    let jaEscolhidoCheck = document.querySelector(".prato .ok");
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

// ARCHIVING DRINK VARIABLES
function bebidaPedida(elemento) {
    let jaEscolhido = document.querySelector(".bebida.escolhido");
    let jaEscolhidoCheck = document.querySelector(".bebida .ok");
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


// ARCHIVING DESSERT VARIABLES
function sobremesaPedida(elemento) {
    let jaEscolhido = document.querySelector(".sobremesa.escolhido");
    let jaEscolhidoCheck = document.querySelector(".sobremesa .ok");
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

// RELEASE BUY BUTTON
function liberarCompra() {
    if (prato !== undefined && sobremesa !== undefined && bebida !== undefined ) {
        console.log("Ok");
        document.querySelector('.botao-desabilitado').classList.add('escondido');
        document.querySelector('.botao-habilitado').classList.remove('escondido');
    }else {console.log("Nao ok")}
}

//SEND REQUEST
function enviarPedido() {
    
    let nome = prompt("Informe seu nome");
    let endereco = prompt("Agora, digite seu endereço");
    let mensagem = `a Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${total.toFixed(2)}
    
    Nome: ${nome}
    Endereço: ${endereco}`;
    console.log(mensagem);
    let msgWpp = encodeURIComponent(mensagem);
    linkWpp = "https://wa.me/5521979778806?text=" + msgWpp;
    document.querySelector(".final a").href = linkWpp;
}
//ORDER SUMMARY APPEARS
function resumoPedido() {
    resumoLista();
    document.querySelector(".resumo-pedido").classList.remove("escondido");
    document.querySelector(".retangulo-transparente").classList.remove("escondido");
}
function cancelarPedido(){
    document.querySelector(".resumo-pedido").classList.add("escondido");
    document.querySelector(".retangulo-transparente").classList.add("escondido");

}

//ORDER SUMMARY IS MADE
function resumoLista() {
    total = (precoPrato + precoBebida + precoSobremesa);
    
    document.querySelector(".lista-pedido").innerHTML = `\n\t\t\t\t<div>\n\t\t\t\t\t<p>${prato}</p>\n\t\t\t\t\t<p>${precoPrato.toFixed(2)}</p>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<p>${bebida}</p>\n\t\t\t\t\t<p>${precoBebida.toFixed(2)}</p>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<p>${sobremesa}</p>\n\t\t\t\t\t<p>${precoSobremesa.toFixed(2)}</p>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<p><strong>TOTAL</strong></p>\n\t\t\t\t\t<p><strong>R$ ${total.toFixed(2)}</strong></p>\n\t\t\t\t</div>\n\t\t\t`
}

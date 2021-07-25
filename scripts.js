let prato;
let precoPrato;
let bebida;
let precoBebida;
let sobremesa;
let precoSobremesa;



function comidaPedida(elemento) {
    const jaEscolhido = document.querySelector(".prato.escolhido");
    console.log(jaEscolhido);
    if (jaEscolhido !== null) {
        jaEscolhido.classList.remove("escolhido");
        elemento.classList.add("escolhido");
    }
    else {
        elemento.classList.add("escolhido");
    }
    precoPrato = document.querySelector(".escolhido .preco-prato").innerHTML;
    console.log(precoPrato);
    prato = document.querySelector(".escolhido .titulo-prato").innerHTML;
    console.log(prato);
    liberarCompra();
}
function bebidaPedida(elemento) {
    const jaEscolhido = document.querySelector(".bebida.escolhido");
    console.log(jaEscolhido);
    if (jaEscolhido !== null) {
        jaEscolhido.classList.remove("escolhido");
        elemento.classList.add("escolhido");
    }
    else {
        elemento.classList.add("escolhido");
    }
    precoBebida = document.querySelector(".escolhido .preco-bebida").innerHTML;
    console.log(precoBebida);
    bebida = document.querySelector(".escolhido .titulo-bebida").innerHTML;
    console.log(bebida);
    liberarCompra();
}

function sobremesaPedida(elemento) {
    const jaEscolhido = document.querySelector(".sobremesa.escolhido");
    console.log(jaEscolhido);
    if (jaEscolhido !== null) {
        jaEscolhido.classList.remove("escolhido");
        elemento.classList.add("escolhido");
    }
    else {
        elemento.classList.add("escolhido");
    }
    precoSobremesa = document.querySelector(".escolhido .preco-sobremesa").innerHTML;
    console.log(precoSobremesa);
    sobremesa = document.querySelector(".escolhido .titulo-sobremesa").innerHTML;
    console.log(sobremesa);
    liberarCompra();
}
function liberarCompra() {
    if (prato !== undefined && sobremesa !== undefined && bebida !== undefined ) {
        console.log("Ok");
    }else {console.log("Nao ok")}
}


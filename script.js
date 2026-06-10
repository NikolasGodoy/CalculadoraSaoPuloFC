//referncia para o campo da tela (display)

const tela = document.getElementById("tela")

//adiciona o numero ou o operador na tela
function adicionarValor(valor) {
    tela.value += valor /* vai pegar a tela e adicionar o valor */

}

// limpar toda a tela

function limparTela() {
    tela.value = ""
}

//apagar o ultimo caractere da tela

function apagarUltimo() {
    tela.value = tela.value.slice(0, -1)
}

function calcularResultado(){
    // try tenta calcular
    try{
        tela.value = eval(tela.value) // eval transforma funao de string para numerico

    }catch(erro){
        tela.value = "ERRO"
    }
}
//ativar o teclado 
document.addEventListener("keydown", function(evento){
    const tecla = evento.key;

    if("0123456789-+*/." .includes(tecla)){
        adicionarValor(tecla)
    }
    // || ou 
    if(tecla === "Enter" || tecla === "="){
        calcularResultado();
    }

    if(tecla === "Escape"){
        limparTela()
    }

    if(tecla === "BackSpace"){
        apagarUltimo
    }
})
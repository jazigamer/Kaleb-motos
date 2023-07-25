 document.addEventListener("DOMContentLoaded", function() {
    var titleElement = document.querySelector("title");
    titleElement.style.color = "#00ff00";
 });
 function exibirMensagemTelaPequena() {
    var larguraTela = window.innerWidth;

    if (larguraTela < 600) { // Defina o valor de largura que considera "muito pequeno"
        document.getElementById("mensagem-small-screen").style.display = "block";
    } else {
        document.getElementById("mensagem-small-screen").style.display = "none";
    }
}

// Chame a função quando a página carregar e também quando a janela for redimensionada
window.addEventListener("load", exibirMensagemTelaPequena);
window.addEventListener("resize", exibirMensagemTelaPequena);
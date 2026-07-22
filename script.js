// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {

    const botao = document.querySelector(".boton");

    if (botao) {
        botao.addEventListener("click", function (e) {
            e.preventDefault();

            // Temporariamente envia para a página de agradecimento.
            // Depois substituiremos este link pelo checkout.
            window.location.href = "obrigado.html";
        });
    }

});

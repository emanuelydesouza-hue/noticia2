
document.addEventListener("DOMContentLoaded", function () {

    const elementoData = document.getElementById("data-publicacao");

    const dataPublicacao = new Date(2026, 7, 20);

    const opcoes = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };

    elementoData.textContent =
        dataPublicacao.toLocaleDateString("pt-BR", opcoes);

});

document.addEventListener("DOMContentLoaded", function () {
    const dataPublicacao = document.getElementById("data-publicacao");

    const data = new Date(2026, 7, 20);

    dataPublicacao.textContent = data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
});

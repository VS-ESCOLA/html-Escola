// 1. Lógica dos botões de reação dos posts (Curtidas)
const botoes = document.querySelectorAll("main article button");

botoes.forEach(function(botao) {
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        let texto = botao.querySelector("span");
        texto.textContent++;
    }
});

// 2. Lógica de alternância do Tema (Modo Escuro / Claro)
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-claro")) {
        corpoPagina.classList.remove("tema-claro");
    } else {
        corpoPagina.classList.add("tema-claro");
    }
}
// 1. Contador de curtidas individual para cada botão
const botoes = document.querySelectorAll("main article button");

botoes.forEach(function(botao) {
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        let texto = botao.querySelector("span");
        texto.textContent++;
    }
});

// 2. Alternância do modo claro / escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;
    corpoPagina.classList.toggle("tema-claro");
}
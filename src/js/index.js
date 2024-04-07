/*
    Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrsar mais no JS para poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão

        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - Esconder o botão de mostrar mais

        Passo 1 - pegar o botão e esconder ele

*/

//Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrsar mais no JS para poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
let projetosRevelados = []; // Array para armazenar os projetos que foram revelados

botaoMostrarProjetos.addEventListener("click", () => { 
    if (botaoMostrarProjetos.textContent === "Mostrar mais") {
        mostrarMaisProjetos();
    } else {
        esconderProjetosRevelados();
    }
});

function esconderProjetosRevelados() {
    // Esconde apenas os projetos que foram revelados pelo clique do botão "Mostrar mais"
    projetosRevelados.forEach(projeto => {
        projeto.classList.remove('ativo');
    });
    // Limpa o array após esconder os projetos
    projetosRevelados = [];
    botaoMostrarProjetos.textContent = "Mostrar mais"; // Muda o texto do botão
}

function mostrarMaisProjetos() {
    const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");
    projetosInativos.forEach(projeto => {
        projeto.classList.add('ativo');
        // Adiciona o projeto revelado ao array para controle
        projetosRevelados.push(projeto);
    });
    botaoMostrarProjetos.textContent = "Mostrar menos"; // Muda o texto do botão
}




// ==========================================
// 1. Controle do Tema (Claro / Escuro)
// ==========================================
const btnTema = document.getElementById('tema');
const body = document.body;

btnTema.addEventListener('click', function() {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        btnTema.textContent = "🌙 Modo Escuro";
    } else {
        btnTema.textContent = "☀️ Modo Claro";
    }
});

// ==========================================
// 2. Cadastro e Exclusão de Filmes
// ==========================================
const form = document.getElementById('filmeForm');
const listaFilmes = document.getElementById('lista-filmes');

form.addEventListener('submit', function(event) {
    // Evita o recarregamento padrão da página
    event.preventDefault();

    // Captura os valores dos inputs
    const nome = document.getElementById('nome').value;
    const genero = document.getElementById('genero').value;
    const ano = document.getElementById('ano').value;

    // Cria o elemento do card
    const card = document.createElement('div');
    card.className = 'card';

    // Monta o conteúdo interno do card
    card.innerHTML = `
        <p>🎬 <strong>${nome}</strong></p>
        <p>🎭 ${genero}</p>
        <p>📅 ${ano}</p>
        <button class="btn-excluir">Excluir</button>
    `;

    // Adiciona evento de clique para remover o card específico
    const btnExcluir = card.querySelector('.btn-excluir');
    btnExcluir.addEventListener('click', function() {
        card.remove();
    });

    // Insere o card na tela
    listaFilmes.appendChild(card);

    // Limpa os campos para o próximo cadastro
    form.reset();
});
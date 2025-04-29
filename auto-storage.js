// Auto Save e Auto Load usando LocalStorage

// Carrega postagens já salvas, ou cria uma lista vazia
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Carrega administradores já salvos, ou cria com padrão
let admins = JSON.parse(localStorage.getItem('admins')) || {
    "Vakeiroo": "melhorstreamerdomundo",
    "Gabbz": "230112"
};

// Função para salvar postagens
function salvarPosts() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Função para salvar administradores
function salvarAdmins() {
    localStorage.setItem('admins', JSON.stringify(admins));
}

// Função para criar uma nova postagem
function criarPostagem(titulo, conteudo, imagemBase64 = null) {
    const novaPostagem = {
        titulo: titulo,
        conteudo: conteudo,
        imagem: imagemBase64
    };
    posts.push(novaPostagem);
    salvarPosts(); // Salva automaticamente
    renderizarPostagens();
}

// Função para criar novo administrador
function criarNovoAdmin(usuario, senha) {
    admins[usuario] = senha;
    salvarAdmins(); // Salva automaticamente
    alert(`Administrador ${usuario} criado com sucesso!`);
}

// Função para deletar uma postagem
function deletarPostagem(index) {
    posts.splice(index, 1);
    salvarPosts(); // Atualiza automaticamente
    renderizarPostagens();
}

// Função para renderizar postagens no HTML
function renderizarPostagens() {
    const container = document.getElementById('posts') || document.getElementById('admin-posts');
    if (!container) return;
    container.innerHTML = '';

    posts.forEach((post, index) => {
        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `
            <h3>${post.titulo}</h3>
            <p>${post.conteudo}</p>
            ${post.imagem ? `<img src="${post.imagem}" style="max-width:100%; margin-top:10px;">` : ''}
            <button onclick="deletarPostagem(${index})">Excluir</button>
        `;
        container.appendChild(div);
    });
}

// Auto renderizar quando abrir
window.onload = () => {
    renderizarPostagens();
};

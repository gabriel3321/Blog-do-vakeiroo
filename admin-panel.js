// Função para criar uma nova postagem
function criarPostagem(titulo, conteudo) {
    // Aqui você pode salvar a postagem em um banco de dados ou arquivo
    console.log("Postagem criada:", titulo, conteudo);
    // Exemplo de adicionar à tela
    let blogArea = document.getElementById('blog-area');
    blogArea.innerHTML += `<div><h2>${titulo}</h2><p>${conteudo}</p><button onclick="excluirPostagem(this)">Excluir</button></div>`;
}

// Função para excluir uma postagem
function excluirPostagem(button) {
    button.parentElement.remove();
    // Aqui você também pode remover do banco de dados ou arquivo
    console.log("Postagem excluída");
}

// Exemplo de botão para adicionar uma nova postagem
document.getElementById('criar-post').addEventListener('click', function() {
    let titulo = prompt("Digite o título da postagem:");
    let conteudo = prompt("Digite o conteúdo da postagem:");
    criarPostagem(titulo, conteudo);
});

function login() {
    const usuarios = JSON.parse(localStorage.getItem('admins')) || { "Vakeiroo": "melhorstreamerdomundo", "Gabbz": "230112" };
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (usuarios[user] === pass) {
        if (user === "Gabbz") {
            window.location.href = "painel-admin.html";
        } else {
            window.location.href = "admin.html";
        }
    } else {
        document.getElementById('error-msg').innerText = "Usuário ou senha incorretos!";
    }
}

// Mostrar sessões do painel
function mostrarSessao(sessao) {
    document.querySelectorAll('.content section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sessao).style.display = 'block';
}

// Criar Post
function criarPost() {
    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('conteudo').value;
    const imagemInput = document.getElementById('imagem').files[0];

    if (!titulo || !conteudo) {
        alert('Preencha título e conteúdo!');
        return;
    }

    if (imagemInput) {
        const reader = new FileReader();
        reader.onload = () => {
            criarPostagem(titulo, conteudo, reader.result);
        };
        reader.readAsDataURL(imagemInput);
    } else {
        criarPostagem(titulo, conteudo);
    }

    document.getElementById('titulo').value = '';
    document.getElementById('conteudo').value = '';
    document.getElementById('imagem').value = '';
}

// Logout
function logout() {
    window.location.href = "index.html";
}

// Modo manutenção
function ativarManutencao() {
    localStorage.setItem('siteStatus', 'manutencao');
    alert("Site em manutenção!");
    window.location.href = "index.html";
}

function desativarManutencao() {
    localStorage.setItem('siteStatus', 'ativo');
    alert("Site ativado!");
    window.location.href = "index.html";
}

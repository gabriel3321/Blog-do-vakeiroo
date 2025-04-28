// Definindo o login e senha do admin
const adminUsuarios = {
    "Gabbz": "230112",
    "Vakeiro": "melhorstreamerdomundo"
};

// Função de login
function login() {
    let usuario = prompt("Digite seu nome de usuário:");
    let senha = prompt("Digite sua senha:");

    if (adminUsuarios[usuario] === senha) {
        alert("Login bem-sucedido!");
        // Redireciona ou mostra o painel de administração
        window.location.href = "admin-panel.html"; // Exemplo de redirecionamento para o painel admin
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

// Chama a função de login
login();

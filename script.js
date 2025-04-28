// Admin Users
const adminUsers = {
    "Vakeiroo": "melhorstreamerdomundo",
    "Gabbz": "230112"
};

// Login
document.getElementById('login-btn').addEventListener('click', () => {
    let username = prompt("Digite seu usuário:");
    let password = prompt("Digite sua senha:");

    if (adminUsers[username] === password) {
        alert("Login bem-sucedido!");
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        alert("Usuário ou senha incorretos!");
    }
});

// Checar Live da Twitch
fetch('https://api.twitch.tv/helix/streams?user_login=vakeiroo', {
    headers: {
        'Client-ID': 'SEU_CLIENT_ID_AQUI',
        'Authorization': 'Bearer SEU_ACCESS_TOKEN_AQUI'
    }
})
.then(response => response.json())
.then(data => {
    const liveStatus = document.getElementById('live-status');
    if (data.data && data.data.length > 0) {
        liveStatus.innerText = "🔥 AO VIVO!";
        liveStatus.style.color = '#ff00ff';
    } else {
        liveStatus.innerText = "🛌 Offline";
        liveStatus.style.color = '#999';
    }
})
.catch(error => {
    console.log('Erro ao verificar status', error);
});

// Criar Postagem
document.getElementById('create-post-btn').addEventListener('click', () => {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const imageFile = document.getElementById('post-image').files[0];

    if (!title || !content) {
        alert("Preencha título e conteúdo!");
        return;
    }

    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    let postHTML = `<h2>${title}</h2><p>${content}</p>`;
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            postHTML += `<img src="${e.target.result}" style="max-width:100%; border-radius:10px; margin-top:10px;">`;
            postDiv.innerHTML = postHTML;
        }
        reader.readAsDataURL(imageFile);
    } else {
        postDiv.innerHTML = postHTML;
    }

    document.getElementById('posts').appendChild(postDiv);

    // Limpar campos
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-image').value = '';
});

// Admin Users
const adminUsers = {
    "Vakeiroo": "melhorstreamerdomundo",
    "Gabbz": "230112"
};

// Array para armazenar posts
let posts = [];

// Login
document.getElementById('login-btn').addEventListener('click', () => {
    let username = prompt("Digite seu usuário:");
    let password = prompt("Digite sua senha:");

    if (adminUsers[username] === password) {
        alert("Login bem-sucedido!");
        document.getElementById('admin-panel').style.display = 'block';
        renderAdminPosts();
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

    const post = { title, content, image: null };

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            post.image = e.target.result;
            posts.push(post);
            renderPosts();
            renderAdminPosts();
        }
        reader.readAsDataURL(imageFile);
    } else {
        posts.push(post);
        renderPosts();
        renderAdminPosts();
    }

    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-image').value = '';
});

// Renderizar posts na homepage
function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;

        if (post.image) {
            postDiv.innerHTML += `<img src="${post.image}" style="max-width:100%; border-radius:10px; margin-top:10px;">`;
        }

        postsContainer.appendChild(postDiv);
    });
}

// Renderizar posts no admin panel
function renderAdminPosts() {
    const adminPostsContainer = document.getElementById('admin-posts');
    adminPostsContainer.innerHTML = '';

    posts.forEach((post, index) => {
        const adminPostDiv = document.createElement('div');
        adminPostDiv.className = 'post';
        adminPostDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;

        if (post.image) {
            adminPostDiv.innerHTML += `<img src="${post.image}" style="max-width:100%; border-radius:10px; margin-top:10px;">`;
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText = 'Excluir';
        deleteBtn.onclick = () => {
            posts.splice(index, 1);
            renderPosts();
            renderAdminPosts();
        };

        adminPostDiv.appendChild(deleteBtn);
        adminPostsContainer.appendChild(adminPostDiv);
    });
}

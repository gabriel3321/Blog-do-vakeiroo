// Verificando se o Vakeiroo está ao vivo
const liveStatusElement = document.getElementById("live-status");

fetch('https://api.twitch.tv/helix/streams?user_login=vakeiroo', {
    headers: {
        'Client-ID': 'YOUR_TWITCH_CLIENT_ID',
        'Authorization': 'Bearer YOUR_TWITCH_ACCESS_TOKEN'
    }
})
.then(response => response.json())
.then(data => {
    if (data.data && data.data.length > 0) {
        liveStatusElement.innerText = 'Ao vivo!';
    } else {
        liveStatusElement.innerText = 'Offline';
    }
})
.catch(error => console.log('Erro ao verificar status de live', error));

// Carregar posts (fake para exemplo)
const posts = [
    { title: 'Bem-vindo ao Blog', content: 'Este é o blog oficial do Vakeiroo.' },
    { title: 'Post 2', content: 'Aqui vai o conteúdo do post.' }
];

const postsContainer = document.getElementById("posts");
posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
    postsContainer.appendChild(postElement);
});

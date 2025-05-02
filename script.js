const statusEl = document.getElementById('status');
const postsEl = document.getElementById('posts');
const avisosBox = document.getElementById('avisosBox');
const onlineCount = document.getElementById('onlineCount');

let estado = JSON.parse(localStorage.getItem('estado')) || {
  manutencao: true,
  postagens: [],
};

function atualizarEstado() {
  if (estado.manutencao) {
    statusEl.textContent = 'Estamos em manutenção. Volte em breve!';
    avisosBox.style.display = 'none';
  } else {
    statusEl.textContent = 'Estamos ativos! Veja as novidades:';
    avisosBox.style.display = 'block';
    mostrarPostagens();
  }
}

function mostrarPostagens() {
  postsEl.innerHTML = '';
  estado.postagens.forEach((post, i) => {
    const p = document.createElement('p');
    p.textContent = `${i + 1}. ${post}`;
    postsEl.appendChild(p);
  });
}

let contador = Math.floor(Math.random() * 10 + 1);
onlineCount.textContent = contador;
setInterval(() => {
  contador = Math.floor(Math.random() * 10 + 1);
  onlineCount.textContent = contador;
}, 3000);

atualizarEstado();

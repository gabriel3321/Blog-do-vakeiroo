function logar() {
  const user = document.getElementById('usuario').value;
  const pass = document.getElementById('senha').value;
  if (user === 'Gabbz' && pass === '230112') {
    document.getElementById('painel').classList.remove('hidden');
    document.getElementById('login').classList.add('hidden');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function getEstado() {
  return JSON.parse(localStorage.getItem('estado')) || { manutencao: true, postagens: [] };
}

function salvarEstado(estado) {
  localStorage.setItem('estado', JSON.stringify(estado));
}

function alternarManutencao() {
  let estado = getEstado();
  estado.manutencao = !estado.manutencao;
  salvarEstado(estado);
  alert('Modo manutenção agora está ' + (estado.manutencao ? 'ATIVO' : 'DESATIVADO'));
}

function criarPostagem() {
  let estado = getEstado();
  const conteudo = prompt('Digite a nova postagem:');
  if (conteudo) {
    estado.postagens.push(conteudo);
    salvarEstado(estado);
    alert('Postagem criada.');
  }
}

function apagarPostagem() {
  let estado = getEstado();
  let lista = estado.postagens.map((p, i) => `${i + 1}. ${p}`).join('\n');
  const indice = parseInt(prompt('Postagens:\n' + lista + '\n\nDigite o número da postagem a apagar:')) - 1;
  if (!isNaN(indice) && estado.postagens[indice]) {
    estado.postagens.splice(indice, 1);
    salvarEstado(estado);
    alert('Postagem apagada.');
  }
}

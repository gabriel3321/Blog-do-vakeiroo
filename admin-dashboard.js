// Função para mostrar IP, cidade e estado no painel admin
function mostrarInformacoesIP() {
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=f1c747ab534f49b29d9967da9bb023b7')
        .then(response => response.json())
        .then(data => {
            let ipInfo = document.getElementById('ip-info');
            ipInfo.innerHTML = `<p>IP: ${data.ip}</p><p>Cidade: ${data.city}</p><p>Estado: ${data.state_prov}</p>`;
        });
}

// Chama a função para exibir as informações ao carregar a página
mostrarInformacoesIP();

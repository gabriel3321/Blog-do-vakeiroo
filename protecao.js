// Função para capturar IP e localização do usuário
function getUserLocation() {
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=f1c747ab534f49b29d9967da9bb023b7')
        .then(response => response.json())
        .then(data => {
            console.log("IP:", data.ip);
            console.log("Cidade:", data.city);
            console.log("Estado:", data.state_prov);
            // Enviar e-mail com essas informações
            enviarEmail(data);
        });
}

function enviarEmail(data) {
    // Configurar e enviar e-mail via EmailJS (já configurado previamente)
    emailjs.send("service_9lds88h", "YOUR_TEMPLATE_ID", {
        ip: data.ip,
        cidade: data.city,
        estado: data.state_prov
    })
    .then(response => console.log("E-mail enviado com sucesso!", response))
    .catch(error => console.log("Erro ao enviar e-mail", error));
}

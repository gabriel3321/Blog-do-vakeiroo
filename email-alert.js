// Configuração do EmailJS para envio de e-mail
(function() {
    emailjs.init("YOUR_USER_ID"); // Substitua com seu UserID do EmailJS

    // Função para enviar o e-mail
    function enviarEmail(info) {
        emailjs.send("service_9lds88h", "YOUR_TEMPLATE_ID", {
            ip: info.ip,
            cidade: info.city,
            estado: info.state_prov
        })
        .then(response => console.log("E-mail enviado com sucesso!", response))
        .catch(error => console.log("Erro ao enviar e-mail", error));
    }
})();

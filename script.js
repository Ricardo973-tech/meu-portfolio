// Função para validar o formulário de contato
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Capturando os campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples: verifica se estão vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de formato de e-mail usando RegEx
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Simulação de envio (conforme requisito 5)
    alert("Mensagem enviada com sucesso! (Simulação)");
    
    // Limpa o formulário
    document.getElementById('formContato').reset();
}

// Adiciona o evento ao formulário quando a página carregar
window.onload = function() {
    const form = document.getElementById('formContato');
    if (form) {
        form.addEventListener('submit', validarFormulario);
    }
};


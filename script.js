/**
 * Script de gerenciamento de comportamento dinâmico do portfólio.
 * Concentra a escuta de eventos e validações nativas em JavaScript Vanilla (sem frameworks).
 */
document.addEventListener("DOMContentLoaded", function() {
    
    // Captura os elementos do formulário de contato se existirem na página atual
    const formContato = document.getElementById("formContato");
    const containerFeedback = document.getElementById("mensagemFeedback");

    // Verifica de forma segura se o usuário está na página de contato antes de executar a lógica
    if (formContato && containerFeedback) {
        
        formContato.addEventListener("submit", function(evento) {
            // Evita o comportamento padrão do navegador de recarregar a página ao submeter
            evento.preventDefault();

            // Captura e remove espaços extras nas pontas dos inputs
            const valorNome = document.getElementById("nome").value.trim();
            const valorEmail = document.getElementById("email").value.trim();
            const valorMensagem = document.getElementById("mensagem").value.trim();

            // Limpa as classes de validações anteriores antes de rodar o novo teste
            containerFeedback.className = "feedback-oculto";

            // 1. Validação básica: Verifica se existem campos vazios
            if (valorNome === "" || valorEmail === "" || valorMensagem === "") {
                containerFeedback.textContent = "Erro: Todos os campos do formulário devem ser preenchidos.";
                containerFeedback.classList.add("feedback-erro");
                return; // Encerra a execução do evento prematuramente
            }

            // 2. Validação complexa: Expressão Regular para conferir o formato correto de e-mail
            const expressaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!expressaoEmail.test(valorEmail)) {
                containerFeedback.textContent = "Erro: Por favor, digite um endereço de e-mail válido.";
                containerFeedback.classList.add("feedback-erro");
                return; // Encerra a execução do evento prematuramente
            }

            // 3. Sucesso: Se passar por todas as regras, exibe mensagem positiva na tela
            containerFeedback.textContent = `Obrigado pelo contato, ${valorNome}! Sua mensagem foi enviada e validada com sucesso.`;
            containerFeedback.classList.add("feedback-sucesso");

            // Reseta todos os campos de texto do formulário automaticamente após o envio limpo
            formContato.reset();
        });
    }
});

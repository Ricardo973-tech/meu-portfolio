// 1. Validação e Simulação de Envio do Formulário
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação Simples
    if (nome && email.includes('@') && mensagem) {
        alert("Mensagem enviada com sucesso!");
        feedback.innerHTML = `<p style="color: green;">Obrigado, ${nome}! Entraremos em contato.</p>`;
        contactForm.reset(); // Limpa os campos
    } else {
        feedback.innerHTML = `<p style="color: red;">Por favor, preencha os campos corretamente.</p>`;
    }
});

// 2. Alternar Tema Claro/Escuro
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


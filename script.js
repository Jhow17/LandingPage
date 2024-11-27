// Função para exibir um alerta de contato
function showContactAlert() {
    alert('Obrigado por entrar em contato! Nossa equipe retornará em breve.');
 }
 // Função para validar o login
 function validateLogin(event) {
    event.preventDefault(); // Impede o envio do formulário
    const email = loginForm.email.value;
    const senha = loginForm.senha.value;
    // Verifica se o login é válido (exemplo de como deve ser )
    if (email === 'admin@example.com' && senha === 'password') {
        alert('Login realizado com sucesso!');
    } else {
        alert('Erro ao realizar login. Tente novamente.');
    }
 }
 // Função para exibir um alerta ao clicar no botão "Saiba Mais"
 function showMoreInfoAlert() {
    alert('Você está prestes a descobrir como o sistema de notificação pode ajudar o seu hospital!');
 }
 // Função para adicionar os eventos aos elementos
 function addEventListeners() {
    const contatoButton = document.querySelector('.btn'); // Botão de contato
    const loginForm = document.querySelector('#login'); // Formulário de login
    const saibaMaisButton = document.querySelector('.btn'); // Botão "Saiba Mais"
    // Adiciona evento de clique ao botão de contato
    contatoButton.addEventListener('click', showContactAlert);
    // Adiciona evento de submit ao formulário de login
    loginForm.addEventListener('submit', validateLogin);
    // Adiciona evento de clique ao botão "Saiba Mais"
    saibaMaisButton.addEventListener('click', showMoreInfoAlert);
 }
 // Função principal para inicializar o script
 function init() {
    addEventListeners(); // Chama a função para adicionar os eventos
 }
 // Inicializa o script quando o DOM estiver completamente carregado
 document.addEventListener('DOMContentLoaded', init);
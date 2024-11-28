// Função para exibir um alerta de contato
const loginForm =   document.querySelector('#loginForm')
const email =document.querySelector('#email')
const senha = document.querySelector('#senha')
const contatoForm = document.querySelector('#form-contato')
const nome = document.querySelector('#nome')
const assunto = document.querySelector('#assunto')
const telefone = document.querySelector('#telefone')
const mensagem = document.querySelector('#mensagem')

loginForm.addEventListener("submit",validateLogin)
contatoForm.addEventListener("submit", enviaContato)
 // Função para validar o login
 function validateLogin(event) {
    event.preventDefault(); // Impede o envio do formulário
    // Verifica se o login é válido (exemplo de como deve ser )
    if (email.value === 'admin@example.com' && senha.value === 'password') {
        alert('Login realizado com sucesso!');
    } else {
        alert('E-mail ou senha incorretos.');
    }
 }
 function enviaContato(event) {
   event.preventDefault(); 
   alert('Obrigado por entrar em contato ! Suas informações ja foram enviadas')
   alert(`Nome: ${nome.value}\n Assunto: ${assunto.value}\n Telefone: ${telefone.value}\n Mensagem: ${mensagem.value}`)
}


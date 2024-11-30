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

let atualSlide = 1;
const totalSlides = 4; 

function mudarSlide() {
    let titulo = document.querySelector('#carrossel-conteudo h3');
    let texto = document.querySelector('#carrossel-conteudo p');

 
    let radio1 = document.getElementById('radio1').checked;
    let radio2 = document.getElementById('radio2').checked;
    let radio3 = document.getElementById('radio3').checked;
    let radio4 = document.getElementById('radio4').checked;


    if (radio1) {
        titulo.innerText = 'Notificações em Tempo Real';
        texto.innerText = 'Notificações automáticas sempre que um quarto mudar de status, para alertar as equipes de limpeza, manutenção e enfermagem.';
    } else if (radio2) {
        titulo.innerText = 'Gestão Automatizada de Leitos (Dashboard)';
        texto.innerText = 'Exibir uma visão geral do status dos leitos e atividades do hospital, com informações centralizadas para os usuários logados.';
    } else if (radio3) {
        titulo.innerText = 'Notificações via WhatsApp';
        texto.innerText = 'As notificações enviadas pelo sistema serão integradas a uma API, que encaminhará essas mensagens para um grupo de WhatsApp, garantindo comunicação ágil com as equipes';
    } else if (radio4) {
        titulo.innerText = 'Página de Notificações';
        texto.innerText = 'Objetivo: Centralizar todas as notificações do sistema, permitir que os usuários visualizem rapidamente os quartos com um status específico e ataulizem o status do quarto';
    }
}


function autoSlide() {
    atualSlide++;
    if (atualSlide > totalSlides) {
        atualSlide = 1;
    }

    document.getElementById(`radio${atualSlide}`).checked = true;
    mudarSlide(); 
}


setInterval(autoSlide, 7000);

// ---------------------- Variáveis de Elementos ----------------------
const burgerButton = document.getElementById('burger-button');
const navMenu = document.getElementById('nav-menu');
const btnTopo = document.getElementById('voltar-topo');
const msgDiv = document.getElementById('mensagem-dinamica');

// ---------------------- Menu Hamburguer ----------------------
burgerButton.addEventListener('click', () => {
    // Alterna as classes 'active' no botão e no menu
    burgerButton.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link (útil para navegação interna)
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        // Remove as classes 'active' para fechar o menu
        burgerButton.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ---------------------- FUNÇÃO SCROLL TO TOP ----------------------
// Mostra/Esconde o botão com o scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

// Função de rolagem suave ao topo
btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ---------------------- FUNÇÃO MENSAGEM DINÂMICA (Manutenção do Código Original) ----------------------
const mensagens = [
    'Bem-vindo ao meu portfólio!', 
    'Veja meus projetos abaixo!', 
    'Entre em contato para colaborações!', 
    'Aprendendo e evoluindo sempre!'
];
let msgIndex = 0;

function mostrarMensagem() {
    // Certifica-se de que a div existe antes de tentar manipulá-la
    if (msgDiv) { 
        msgDiv.textContent = mensagens[msgIndex];
        msgDiv.style.display = 'block';
        
        // Esconde após 3 segundos
        setTimeout(() => {
            msgDiv.style.display = 'none';
        }, 3000); 
        
        // Avança para a próxima mensagem
        msgIndex = (msgIndex + 1) % mensagens.length;
    }
}

// Inicia e repete a mensagem
mostrarMensagem();
setInterval(mostrarMensagem, 8000); // Repete a cada 8 segundos

// Obter o botão pelo ID

const backToTopButton = document.getElementById("backToTopBtn");
 
// Função que mostra o botão após a rolagem

const scrollFunction = () => {

  // Verifica se a posição de rolagem (window.scrollY) é maior que 20 pixels

  if (window.scrollY > 20) {

    backToTopButton.classList.add("show");

  } else {

    backToTopButton.classList.remove("show");

  }

}
 
// Adiciona um listener para a rolagem da página

window.addEventListener("scroll", scrollFunction);
 

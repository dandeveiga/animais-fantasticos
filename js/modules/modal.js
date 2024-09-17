export default function initModal() {
  // começar selecionando os botões que vão ser utilizados
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  // agora adicionar as funções
  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault(); // previne o padrão de ir para outro URL
      containerModal.classList.toggle("ativo"); // adiciona ou remove a classe ativo
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        // aqui o this é referente containerModal
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}

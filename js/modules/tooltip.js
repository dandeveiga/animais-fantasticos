export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this); // referência ao item que estou add o evento.

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  }; // macete de passar uma função fora do escopo e poder utilizá=la, basta passar como objeto, e inserir handleEvent nela. sem isso, tanto tooltipBox, quando OnMouveMove e onMouseLeave dariam erro de javascript por não estarem definidas dentro do escopo.

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px"; // os 20px adicionados aqui são para que ao correr com o mouse no mapa, não fique piscando o tooltip. Explicação do professor: "ele está piscando, pois quando estou passando o mouse por cima dele, uma caixa aparece por baixo do meu mouse,e aí identifica que não estou mais por cima da imagem, e identifica que o OnMouseLeave aconteceu. Adicionando 20px, isso para de ocorrer."
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div"); // cria uma div
    const text = element.getAttribute("aria-label"); // busca o texto contido na aria label
    tooltipBox.classList.add("tooltip"); // adiciona a classe tooltip
    tooltipBox.innerText = text; // busca o texto contigo em text (acima)
    document.body.appendChild(tooltipBox); // adiciona a div ao final do body do documento html.
    return tooltipBox;
  }
}

// esse tooltip foi mais experimental, para aprendizado, professor deixou claro que essa não é a forma mais otimizada. Pois para mobile é pouco recomendado, funcionaria melhor somente para desktop, pois em touch fica ruim/bugado (veremos mais para frente eventos de touch)

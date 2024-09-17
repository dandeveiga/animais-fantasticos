export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      // para cada numero
      const total = +numero.innerText; // localizá-los e transformar de string pra numero
      const incremento = Math.floor(total / 100); // usar incremento para reduzir o tempo que o número corre pela tela até chegar no total, com math.floor para que ele não fique quebrado

      let start = 0; // vai começar em 0
      const timer = setInterval(() => {
        // o setInterval vai executar até chegar no número total, parando com o clearInterval.
        start = start + incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random()); // aqui o math.random é pra fazer com que esse número de milissegundo definido seja sempre randômico, assim, cada nova atualização de página ocorre um comportamento diferente dos números
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });

  // 24: usar o nome mutation no callback pois ele contém propriedades especiais de consulta no console. o handleMutation vai ser ativado quando ocorrer a mutação
  // 25: buscando o index 0, pois é o primeiro valor de ativo que sempre aparece, criado if para que, caso o target encontre a classe ativo na mutation, executa a função animaNumeros
  // 26: desconectar para que só anime uma vez, senão, toda vez que passar o scroll subindo ou descendo, vai recontar os números por animação

  // 31: aqui é selecionado o target a ser observado, por isso a seleção da classe .numeros (do html)
  // 32: o const observer (podia ter qualquer nome aqui) precisa ser criado com new por ser função construtor como MutationObserver, que precisa de ao menos um argumento. que vai ser o handleMutation (criado na linha 24)

  // 34:  aqui é definido qual o target que o observer precisa observar, que é o que tem a classe .numeros (do html) então passa a const observerTarget, e também passa o segundo item, que vai observar também os atributos que forem true (passado como objeto).
}

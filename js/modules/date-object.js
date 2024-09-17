export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemama = funcionamento.dataset.semana.split(",").map(Number);
  // o dataset.semana retorna a string com 1,2,3,4,5. o .split transforma numa array de ["1", "2", "3", "4", "5"]. o .map(Number) transforma todos os itens string da array em números, ficando [1, 2, 3, 4, 5]
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemama.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

// AULA EXEMPLOS
// const agora = new Date();

// console.log(agora); // no console apareceu: Sun Aug 18 2024 09:15:40 GMT-0300 (Hora padrão de Brasília)

// console.log(agora.getDate()); // 18 >> como número, não string

// console.log(agora.getDay()); // 0 >> pois hoje é domingo

// console.log(agora.getMonth()); // 7 >> Agosto (começa a contar de 0)

// const futuro = new Date("Dec 25 2024");
// console.log(futuro); // no console apareceu: Wed Dec 25 2024 00:00:00 GMT-0300 (Hora padrão de Brasília)

// console.log(agora.getTime()); // 1723983771098 >> mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970

// // Quantos dias falta pro Natal?

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000); // Se eu quisesse em horas, basta remover o 24 da conta.
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(Math.floor(diasFuturo - diasAgora) + " dias"); // 128 dias, como string pois concatenei com texto

// // Dias até - Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.

// const agora2 = new Date();
// const promocao = new Date("December 24 2018 23:59");

// function converterEmDias(time) {
//   return time / (24 * 60 * 60 * 1000);
// }

// const diasAgora2 = converterEmDias(agora2);
// const diasPromocao = converterEmDias(promocao);

// const faltam = diasPromocao - diasAgora2;

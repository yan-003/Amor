window.onload = function() {
  // Data de início do namoro
  const dataInicio = new Date("2024-01-04T00:00:00");

  function calcularTempo() {
    const agora = new Date();
    const tempoEmMilissegundos = agora - dataInicio;

    const segundos = Math.floor(tempoEmMilissegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(tempoEmMilissegundos / (1000 * 60 * 60 * 24));
    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);

    const tempoString = `${anos} anos, ${meses} meses, ${dias % 30} dias, ${segundos % 60} segundos`;

    document.getElementById("tempo").innerText = tempoString;
  }

  setInterval(calcularTempo, 1000); // Atualiza a cada segundo
}

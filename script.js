document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservaForm");
  const lista = document.getElementById("listaReservas");

  function carregarReservas() {
    lista.innerHTML = "";
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.forEach((r, index) => {
      const li = document.createElement("li");
      li.textContent = `${r.nome} - ${r.data} às ${r.hora}`;
      lista.appendChild(li);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push({ nome, data, hora });
    localStorage.setItem("reservas", JSON.stringify(reservas));

    form.reset();
    carregarReservas();
  });

  carregarReservas();
});
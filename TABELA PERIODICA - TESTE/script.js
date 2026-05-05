document.addEventListener("DOMContentLoaded", () => {
  const API = [
    {
      numero: 1,
      simbolo: "H",
      nome: "Hidrogênio",
      massa: "1.008",
      foto: "img/imagem_1.png",
      grupo: 1,
    },
    {
      numero: 2,
      simbolo: "He",
      nome: "Hélio",
      massa: "4.0026",
      foto: "img/imagem_2.png",
      grupo: 1,
    },
    {
      numero: 3,
      simbolo: "Li",
      nome: "Lítio",
      massa: "6.94",
      foto: "img/imagem_3.png",
      grupo: 1,
    },
    {
      numero: 4,
      simbolo: "Be",
      nome: "Berílio",
      massa: "9.0122",
      foto: "img/imagem_4.png",
      grupo: 1,
    },
    {
      numero: 5,
      simbolo: "B",
      nome: "Boro",
      massa: "10.81",
      foto: "img/imagem_5.png",
      grupo: 1,
    },
    {
      numero: 6,
      simbolo: "C",
      nome: "Carbono",
      massa: "12.011",
      foto: "img/imagem_6.png",
      grupo: 2,
    },
    {
      numero: 7,
      simbolo: "N",
      nome: "Nitrogênio",
      massa: "14.007",
      foto: "img/imagem_7.png",
      grupo: 2,
    },
    {
      numero: 8,
      simbolo: "O",
      nome: "Oxigênio",
      massa: "15.999",
      foto: "img/imagem_8.png",
      grupo: 2,
    },
    {
      numero: 9,
      simbolo: "F",
      nome: "Flúor",
      massa: "18.998",
      foto: "img/imagem_9.png",
      grupo: 2,
    },
    {
      numero: 10,
      simbolo: "Ne",
      nome: "Neônio",
      massa: "20.180",
      foto: "img/imagem_10.png",
      grupo: 2,
    },
  ];
  /*
    
  */

  const tabela = document.getElementById("tabela");
  const modal = document.getElementById("modal");

  function render(lista) {
    tabela.innerHTML = "";

    lista.forEach((el) => {
      const div = document.createElement("div");

      // Adiciona a classe base "elemento" e a classe dinâmica do grupo correspondente
      div.className = `elemento grupo-${el.grupo}`;

      div.innerHTML = `
        <div class="numero">${el.numero}</div>
        <div class="simbolo">${el.simbolo}</div>
      `;

      div.onclick = () => abrirModal(el);

      tabela.appendChild(div);
    });
  }

  function abrirModal(el) {
    const imgTag = document.getElementById("foto");

    document.getElementById("nome").innerText = el.nome;
    document.getElementById("simbolo").innerText = el.simbolo;
    document.getElementById("numero").innerText = el.numero;
    document.getElementById("massa").innerText = el.massa;

    // Lógica para mostrar a imagem
    if (el.foto) {
      imgTag.src = el.foto; // Define o caminho da imagem
      imgTag.style.display = "block"; // Faz ela aparecer
    } else {
      imgTag.style.display = "none"; // Esconde se não tiver foto cadastrada
    }
    modal.classList.add("ativo");
  }

  document.getElementById("fechar").onclick = () => {
    modal.classList.remove("ativo");
  };

  document.getElementById("busca").addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase();

    const filtrados = API.filter(
      (el) =>
        el.nome.toLowerCase().includes(valor) ||
        el.simbolo.toLowerCase().includes(valor),
    );

    render(filtrados);
  });

  render(API);
});

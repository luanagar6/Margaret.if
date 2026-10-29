/* ==========================================
   MARGARET.IF — QUIZ EDUCATIVO
   4 categorias, 5 perguntas por categoria
========================================== */

const QUIZZES = {
  computacao: {
    nome: "Computação",
    perguntas: [
      {
        pergunta:
          "Qual foi uma das principais contribuições de Ada Lovelace para a computação?",
        opcoes: [
          "Elaborar um algoritmo para uma máquina analítica",
          "Inventar a internet",
          "Criar a linguagem de programação Python",
          "Construir o primeiro smartphone",
        ],
        correta: 0,
        explicacao:
          "Ada Lovelace escreveu um algoritmo para a Máquina Analítica, um projeto de computador mecânico de Charles Babbage. Por isso, é reconhecida como uma pioneira da programação.",
      },
      {
        pergunta:
          "Margaret Hamilton ficou conhecida por seu trabalho em qual projeto?",
        opcoes: [
          "Desenvolvimento do primeiro satélite artificial",
          "Software de bordo das missões Apollo, da NASA",
          "Criação do primeiro navegador de internet",
          "Desenvolvimento de computadores pessoais",
        ],
        correta: 1,
        explicacao:
          "Margaret Hamilton liderou a equipe responsável pelo software de bordo das missões Apollo, fundamentais para levar astronautas à Lua.",
      },
      {
        pergunta: "O que é um algoritmo?",
        opcoes: [
          "Uma peça física do computador",
          "Um tipo de cabo usado na internet",
          "Uma sequência de passos para resolver um problema",
          "Um programa usado somente para desenhar",
        ],
        correta: 2,
        explicacao:
          "Um algoritmo é uma sequência organizada de instruções para realizar uma tarefa ou resolver um problema.",
      },
      {
        pergunta: "Qual é a principal função do HTML em um site?",
        opcoes: [
          "Proteger o computador contra vírus",
          "Armazenar todos os arquivos da internet",
          "Controlar a conexão com o Wi-Fi",
          "Estruturar o conteúdo de uma página",
        ],
        correta: 3,
        explicacao:
          "O HTML organiza elementos de uma página, como títulos, textos, imagens e links. O CSS cuida principalmente da aparência.",
      },
      {
        pergunta: "O que significa encontrar e corrigir erros em um programa?",
        opcoes: [
          "Depurar o código",
          "Formatar o computador",
          "Desligar o sistema",
          "Compactar uma imagem",
        ],
        correta: 0,
        explicacao:
          "A depuração, também chamada de debugging, é o processo de localizar e corrigir erros para que um programa funcione como esperado.",
      },
    ],
  },

  biologia: {
    nome: "Biologia",
    perguntas: [
      {
        pergunta:
          "A pesquisadora brasileira Tatiana Sampaio estuda tratamentos relacionados a qual problema?",
        opcoes: [
          "Doenças causadas exclusivamente por vírus",
          "Lesões na medula espinhal",
          "Formação de estrelas",
          "Poluição sonora nas cidades",
        ],
        correta: 1,
        explicacao:
          "Tatiana Sampaio pesquisa possibilidades de tratamento para lesões na medula espinhal. Seu trabalho envolve estudos com a proteína polilaminina.",
      },
      {
        pergunta: "Qual é a unidade básica dos seres vivos?",
        opcoes: ["O átomo", "O órgão", "A célula", "O ecossistema"],
        correta: 2,
        explicacao:
          "A célula é a unidade básica estrutural e funcional dos seres vivos. Alguns organismos possuem uma única célula, enquanto outros possuem muitas.",
      },
      {
        pergunta: "Qual é uma das principais funções do DNA?",
        opcoes: [
          "Produzir luz para o corpo",
          "Transportar oxigênio pelo sangue",
          "Digerir os alimentos no estômago",
          "Armazenar informações genéticas",
        ],
        correta: 3,
        explicacao:
          "O DNA carrega informações genéticas que participam do desenvolvimento e do funcionamento dos seres vivos.",
      },
      {
        pergunta: "O que é um ecossistema?",
        opcoes: [
          "O conjunto de seres vivos e o ambiente com o qual interagem",
          "Um grupo formado apenas por animais da mesma espécie",
          "Uma região onde existem somente plantas",
          "Um conjunto de órgãos de um único organismo",
        ],
        correta: 0,
        explicacao:
          "Um ecossistema inclui os seres vivos e os componentes não vivos do ambiente, como água, solo, ar e luz, e as interações entre eles.",
      },
      {
        pergunta: "O que a biotecnologia utiliza para desenvolver soluções?",
        opcoes: [
          "Apenas máquinas industriais",
          "Organismos vivos, células ou componentes biológicos",
          "Somente combustíveis fósseis",
          "Exclusivamente materiais encontrados no espaço",
        ],
        correta: 1,
        explicacao:
          "A biotecnologia utiliza organismos, células ou componentes biológicos para desenvolver produtos e processos, por exemplo na saúde, na agricultura e na indústria.",
      },
    ],
  },

  sociais: {
    nome: "Ciências Sociais",
    perguntas: [
      {
        pergunta:
          "Nise da Silveira ficou conhecida por valorizar qual abordagem no cuidado em saúde mental?",
        opcoes: [
          "O uso exclusivo de cálculos matemáticos",
          "A construção de máquinas industriais",
          "A expressão artística e o cuidado humanizado",
          "O estudo dos planetas e das estrelas",
        ],
        correta: 2,
        explicacao:
          "Nise da Silveira valorizou a expressão artística no cuidado em saúde mental e se opôs a tratamentos que considerava agressivos. Seu trabalho deu origem ao Museu de Imagens do Inconsciente.",
      },
      {
        pergunta:
          "Sueli Carneiro é uma importante pensadora e ativista brasileira ligada a qual tema?",
        opcoes: [
          "Exploração espacial",
          "Engenharia de robôs",
          "Composição musical clássica",
          "Feminismo negro e combate ao racismo",
        ],
        correta: 3,
        explicacao:
          "Sueli Carneiro é filósofa, escritora e ativista antirracista. Ela também fundou o Geledés — Instituto da Mulher Negra.",
      },
      {
        pergunta: "O que a Sociologia estuda principalmente?",
        opcoes: [
          "As relações sociais e o funcionamento da sociedade",
          "A composição química das estrelas",
          "O movimento dos planetas",
          "A estrutura interna dos computadores",
        ],
        correta: 0,
        explicacao:
          "A Sociologia investiga como as pessoas convivem, formam grupos e instituições e como as relações sociais influenciam a vida cotidiana.",
      },
      {
        pergunta: "Qual é um dos temas estudados pela Psicologia?",
        opcoes: [
          "A formação das rochas",
          "O comportamento e os processos mentais",
          "A classificação das estrelas",
          "A composição dos metais",
        ],
        correta: 1,
        explicacao:
          "A Psicologia estuda o comportamento e os processos mentais humanos, incluindo aspectos da aprendizagem, das emoções e da percepção.",
      },
      {
        pergunta:
          "Qual é uma das finalidades do Geledés — Instituto da Mulher Negra?",
        opcoes: [
          "Organizar competições de programação",
          "Pesquisar exclusivamente animais marinhos",
          "Promover os direitos das mulheres e da população negra",
          "Desenvolver equipamentos de astronomia",
        ],
        correta: 2,
        explicacao:
          "O Geledés atua na defesa dos direitos das mulheres e da população negra, com atenção especial às questões que afetam mulheres negras.",
      },
    ],
  },

  cultura: {
    nome: "Cultura e Arte",
    perguntas: [
      {
        pergunta:
          "Sister Rosetta Tharpe ficou conhecida por sua atuação como...",
        opcoes: [
          "Astrônoma e matemática",
          "Cantora e guitarrista",
          "Médica e pesquisadora",
          "Arquiteta e engenheira",
        ],
        correta: 1,
        explicacao:
          "Sister Rosetta Tharpe foi uma cantora e guitarrista de gospel que influenciou músicos e ajudou a moldar o desenvolvimento do rock and roll.",
      },
      {
        pergunta:
          "Marina Abramović é especialmente conhecida por qual tipo de arte?",
        opcoes: [
          "Arquitetura medieval",
          "Pintura científica",
          "Escultura industrial",
          "Arte da performance",
        ],
        correta: 3,
        explicacao:
          "Marina Abramović é uma artista de performance. Suas obras exploram, entre outros temas, a relação entre o artista, o público, o corpo e a mente.",
      },
      {
        pergunta: "Qual destas atividades é um exemplo de arte visual?",
        opcoes: [
          "Pintar um quadro",
          "Resolver uma equação",
          "Medir a temperatura do ar",
          "Programar um banco de dados",
        ],
        correta: 0,
        explicacao:
          "A pintura é uma forma de arte visual. Desenho, fotografia e escultura também são exemplos de linguagens artísticas visuais.",
      },
      {
        pergunta: "Qual é a principal característica da literatura?",
        opcoes: [
          "Estudar apenas o movimento dos corpos",
          "Construir circuitos eletrônicos",
          "Expressar ideias e histórias por meio da linguagem",
          "Medir a composição dos minerais",
        ],
        correta: 2,
        explicacao:
          "A literatura utiliza a linguagem para criar ou transmitir histórias, ideias, sentimentos e reflexões, por exemplo em poemas, contos e romances.",
      },
      {
        pergunta:
          "Por que Sister Rosetta Tharpe é lembrada na história da música?",
        opcoes: [
          "Porque inventou o piano",
          "Porque sua música e sua guitarra influenciaram o rock",
          "Porque criou a primeira ópera",
          "Porque desenvolveu instrumentos eletrônicos para a NASA",
        ],
        correta: 1,
        explicacao:
          "Sua maneira de cantar e tocar guitarra influenciou artistas de gerações posteriores e ajudou a aproximar o gospel de sonoridades associadas ao rock.",
      },
    ],
  },
};

/* ==========================================
   ELEMENTOS DA PÁGINA
========================================== */

const $ = (seletor) => document.querySelector(seletor);

const secaoCategorias = $("#categorias");
const secaoQuiz = $("#area-quiz");
const secaoResultado = $("#resultado");

const elementoNomeQuiz = $("#nome-quiz");
const elementoContador = $("#contador");
const elementoBarra = $("#barra");
const elementoProgresso = $("#progresso");
const elementoPergunta = $("#pergunta");
const elementoAlternativas = $("#alternativas");

const elementoFeedback = $("#feedback");
const elementoFeedbackTitulo = $("#feedback-titulo");
const elementoFeedbackTexto = $("#feedback-texto");
const botaoProxima = $("#proxima");

/* ==========================================
   ESTADO DO QUIZ
========================================== */

let categoriaAtual = "";
let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;

/* ==========================================
   NAVEGAÇÃO
========================================== */

document.querySelectorAll("[data-categoria]").forEach((botao) => {
  botao.addEventListener("click", () => {
    iniciarQuiz(botao.dataset.categoria);
  });
});

$("#voltar-categorias").addEventListener("click", mostrarCategorias);
$("#outra-categoria").addEventListener("click", mostrarCategorias);

$("#tentar-novamente").addEventListener("click", () => {
  iniciarQuiz(categoriaAtual);
});

botaoProxima.addEventListener("click", () => {
  const perguntas = QUIZZES[categoriaAtual].perguntas;

  if (perguntaAtual < perguntas.length - 1) {
    perguntaAtual++;
    desenharPergunta();
  } else {
    mostrarResultado();
  }
});

/* ==========================================
   INÍCIO E EXIBIÇÃO DAS PERGUNTAS
========================================== */

function iniciarQuiz(categoria) {
  if (!QUIZZES[categoria]) return;

  categoriaAtual = categoria;
  perguntaAtual = 0;
  pontuacao = 0;
  respondeu = false;

  secaoCategorias.hidden = true;
  secaoResultado.hidden = true;
  secaoQuiz.hidden = false;

  elementoNomeQuiz.textContent = QUIZZES[categoria].nome;

  desenharPergunta();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function desenharPergunta() {
  const perguntas = QUIZZES[categoriaAtual].perguntas;
  const questao = perguntas[perguntaAtual];

  respondeu = false;

  elementoContador.textContent =
    `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

  elementoPergunta.textContent = questao.pergunta;
  elementoAlternativas.replaceChildren();

  elementoFeedback.hidden = true;
  botaoProxima.hidden = true;

  elementoProgresso.style.width =
    `${(perguntaAtual / perguntas.length) * 100}%`;

  elementoBarra.setAttribute("aria-valuenow", perguntaAtual);

  questao.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement("button");

    botao.type = "button";
    botao.className = "alternativa";
    botao.textContent = `${String.fromCharCode(65 + indice)}. ${opcao}`;

    botao.addEventListener("click", () => {
      responder(indice);
    });

    elementoAlternativas.appendChild(botao);
  });

  botaoProxima.textContent =
    perguntaAtual === perguntas.length - 1
      ? "Ver resultado"
      : "Próxima pergunta";
}

/* ==========================================
   CORREÇÃO E EXPLICAÇÃO
========================================== */

function responder(indiceEscolhido) {
  if (respondeu) return;
  respondeu = true;

  const questao =
    QUIZZES[categoriaAtual].perguntas[perguntaAtual];

  const botoes = elementoAlternativas.querySelectorAll(".alternativa");

  botoes.forEach((botao, indice) => {
    botao.disabled = true;

    if (indice === questao.correta) {
      botao.classList.add("correta");
    } else if (indice === indiceEscolhido) {
      botao.classList.add("errada");
    }
  });

  if (indiceEscolhido === questao.correta) {
    pontuacao++;
    elementoFeedbackTitulo.textContent = "Muito bem! Você acertou! 🎉";
  } else {
    elementoFeedbackTitulo.textContent = "Quase! Vamos aprender juntos.";
  }

  elementoFeedbackTexto.textContent = questao.explicacao;
  elementoFeedback.hidden = false;

  const total = QUIZZES[categoriaAtual].perguntas.length;
  elementoProgresso.style.width =
    `${((perguntaAtual + 1) / total) * 100}%`;

  elementoBarra.setAttribute("aria-valuenow", perguntaAtual + 1);
  botaoProxima.hidden = false;
}

/* ==========================================
   RESULTADO FINAL
========================================== */

function mostrarResultado() {
  const total = QUIZZES[categoriaAtual].perguntas.length;

  secaoQuiz.hidden = true;
  secaoResultado.hidden = false;

  $("#pontuacao").textContent = `${pontuacao} de ${total} acertos`;

  let mensagem;

  if (pontuacao === total) {
    mensagem =
      "Incrível! Você acertou todas as perguntas. Continue explorando e aprendendo!";
  } else if (pontuacao >= 3) {
    mensagem =
      "Muito bom! Você já sabe bastante sobre esta categoria. Continue descobrindo novas histórias!";
  } else {
    mensagem =
      "Cada tentativa é uma oportunidade de aprender. Refaça o quiz e descubra mais sobre essas mulheres!";
  }

  $("#mensagem-resultado").textContent = mensagem;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarCategorias() {
  secaoQuiz.hidden = true;
  secaoResultado.hidden = true;
  secaoCategorias.hidden = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
}
/* ===== ÁREAS: edite profissões, cursos e mulheres aqui. O "id" deve ser igual ao id da seção no index.html ===== */
const AREAS = {
  engenharias: { nome: "Engenharias e Computação", icone: "⚙️",
    profissoes: ["Engenheira de software", "Engenheira de computação", "Analista de dados", "Engenheira civil ou de robótica"],
    cursos: ["Engenharia de Computação", "Ciência da Computação", "Análise e Desenvolvimento de Sistemas", "Engenharia Civil"],
    mulheres: ["Ada Lovelace", "Margaret Hamilton"] },
  sociais: { nome: "Ciências Sociais e Humanas", icone: "🧠",
    profissoes: ["Psicóloga", "Psiquiatra", "Assistente social", "Socióloga ou pesquisadora"],
    cursos: ["Psicologia", "Ciências Sociais", "Serviço Social", "Pedagogia"],
    mulheres: ["Nise da Silveira"] },
  biologicas: { nome: "Ciências Biológicas e da Saúde", icone: "🧬",
    profissoes: ["Bióloga", "Biomédica", "Médica pesquisadora", "Engenheira ambiental"],
    cursos: ["Ciências Biológicas", "Biomedicina", "Medicina", "Engenharia Ambiental"],
    mulheres: ["Tatiana Sampaio"] },
  cultura: { nome: "Cultura e Arte", icone: "🎸",
    profissoes: ["Designer", "Música ou produtora musical", "Produtora audiovisual", "Jornalista ou escritora", "Game designer"],
    cursos: ["Design", "Música", "Cinema e Audiovisual", "Jornalismo", "Artes Visuais"],
    mulheres: ["Sister Rosetta Tharpe"] }
};

/* ===== PERGUNTAS: "pts" diz quantos pontos cada resposta dá para cada área; "f" é o motivo mostrado no resultado ===== */
const PERGUNTAS = [
  { p: "No seu tempo livre, o que mais te atrai?", o: [
    { t: "Montar, programar ou desmontar coisas para ver como funcionam", f: "gosta de montar e programar coisas", pts: { engenharias: 2 } },
    { t: "Conversar, ler sobre pessoas e entender por que agimos assim", f: "se interessa por entender as pessoas", pts: { sociais: 2 } },
    { t: "Observar plantas, animais, o corpo humano e a natureza", f: "tem curiosidade pela natureza e pelo corpo humano", pts: { biologicas: 2 } },
    { t: "Desenhar, escrever, tocar ou criar vídeos", f: "gosta de criar arte e conteúdo", pts: { cultura: 2 } } ] },
  { p: "Qual problema você gostaria de ajudar a resolver?", o: [
    { t: "Criar um app, uma máquina ou um sistema que facilite a vida das pessoas", f: "quer criar tecnologia que facilite a vida", pts: { engenharias: 2, cultura: 1 } },
    { t: "Reduzir desigualdades e cuidar da saúde mental", f: "quer reduzir desigualdades e cuidar de pessoas", pts: { sociais: 2, biologicas: 1 } },
    { t: "Combater doenças e proteger o meio ambiente", f: "quer combater doenças e proteger o meio ambiente", pts: { biologicas: 2, engenharias: 1 } },
    { t: "Dar voz a ideias e emoções por meio da arte", f: "quer dar voz a ideias e emoções", pts: { cultura: 2, sociais: 1 } } ] },
  { p: "Qual matéria da escola você mais curte?", o: [
    { t: "Matemática ou Física", f: "se dá bem com matemática e física", pts: { engenharias: 2 } },
    { t: "História, Sociologia ou Filosofia", f: "gosta de história e de debater ideias", pts: { sociais: 2 } },
    { t: "Biologia ou Química", f: "gosta de biologia e química", pts: { biologicas: 2 } },
    { t: "Artes, Português ou Música", f: "gosta de artes, escrita e música", pts: { cultura: 2 } } ] },
  { p: "Em um trabalho em grupo, você costuma...", o: [
    { t: "Planejar os passos e fazer tudo funcionar", f: "gosta de planejar e fazer as coisas funcionarem", pts: { engenharias: 2 } },
    { t: "Ouvir todo mundo e ajudar o grupo a se entender", f: "sabe ouvir e ajudar o grupo a se entender", pts: { sociais: 2 } },
    { t: "Pesquisar e testar hipóteses para chegar à resposta", f: "gosta de pesquisar e testar hipóteses", pts: { biologicas: 2, engenharias: 1 } },
    { t: "Ter a ideia criativa e cuidar da apresentação", f: "tem ideias criativas e cuida da apresentação", pts: { cultura: 2, sociais: 1 } } ] },
  { p: "Qual destas atividades parece mais divertida?", o: [
    { t: "Criar um jogo ou um robô", f: "se divertiria criando jogos ou robôs", pts: { engenharias: 2, cultura: 1 } },
    { t: "Entrevistar pessoas para uma pesquisa", f: "se divertiria entrevistando pessoas", pts: { sociais: 2 } },
    { t: "Fazer um experimento no laboratório", f: "se divertiria fazendo experimentos", pts: { biologicas: 2 } },
    { t: "Produzir um clipe, uma música ou um podcast", f: "se divertiria produzindo clipes, músicas ou podcasts", pts: { cultura: 2, engenharias: 1 } } ] },
  { p: "O que é mais importante para você em um trabalho?", o: [
    { t: "Inovar e criar soluções com tecnologia", f: "valoriza inovar com tecnologia", pts: { engenharias: 2 } },
    { t: "Ajudar pessoas a viverem melhor", f: "valoriza ajudar pessoas a viverem melhor", pts: { sociais: 2, biologicas: 1 } },
    { t: "Descobrir como a vida e o mundo funcionam", f: "valoriza descobrir como o mundo funciona", pts: { biologicas: 2, engenharias: 1 } },
    { t: "Me expressar e inspirar outras pessoas", f: "valoriza se expressar e inspirar outras pessoas", pts: { cultura: 2, sociais: 1 } } ] }
];

/* ===== LÓGICA ===== */
const $ = s => document.querySelector(s);
let atual = 0, respostas = [];

function mostrar(id) { ["intro", "quiz", "resultado"].forEach(s => $("#" + s).hidden = s !== id); window.scrollTo(0, 0); }

function desenhar() {
  const q = PERGUNTAS[atual];
  $("#contador").textContent = `Pergunta ${atual + 1} de ${PERGUNTAS.length}`;
  $("#progresso").style.width = (atual / PERGUNTAS.length * 100) + "%";
  $("#voltar").hidden = atual === 0;
  $("#pergunta").innerHTML = `<fieldset><legend>${q.p}</legend>` +
    q.o.map((o, i) => `<button type="button" class="op ${respostas[atual] === i ? "sel" : ""}" data-i="${i}">${o.t}</button>`).join("") + "</fieldset>";
  $("#pergunta .op").focus();
}

$("#pergunta").addEventListener("click", e => {
  const b = e.target.closest(".op"); if (!b) return;
  respostas[atual] = +b.dataset.i;
  if (atual < PERGUNTAS.length - 1) { atual++; desenhar(); } else { resultado(); }
});

function resultado() {
  const placar = {}, motivos = {};
  Object.keys(AREAS).forEach(a => { placar[a] = 0; motivos[a] = []; });
  respostas.forEach((r, i) => {
    const o = PERGUNTAS[i].o[r];
    for (const a in o.pts) { placar[a] += o.pts[a]; motivos[a].push({ f: o.f, n: o.pts[a] }); }
  });
  const ordem = Object.keys(placar).filter(a => placar[a] > 0).sort((a, b) => placar[b] - placar[a]);
  const maior = placar[ordem[0]];
  const empatadas = ordem.filter(a => placar[a] === maior).length;
  const mostrarN = Math.max(3, empatadas);
  const lista = ordem.slice(0, mostrarN);

  $("#res-titulo").textContent = empatadas > 1 ? "Você tem mais de uma área com a mesma força!" : "Estas áreas combinam com você";
  $("#res-sub").textContent = "Ciência tem muitos caminhos. Explore cada possibilidade abaixo e veja mulheres que já trilharam esse caminho.";

  $("#res-lista").innerHTML = lista.map(a => {
    const d = AREAS[a], top = placar[a] === maior;
    const porque = motivos[a].sort((x, y) => y.n - x.n).slice(0, 2).map(m => m.f).join(" e ");
    const tag = top ? (empatadas > 1 ? "Empate no topo" : "Melhor combinação") : "Também pode combinar";
    return `<article class="res ${top ? "top" : ""}"><span class="tag">${tag}</span>
      <h3><span aria-hidden="true">${d.icone}</span> ${d.nome}</h3>
      <p class="por">Combina com você porque você ${porque}.</p>
      <h4>Profissões</h4><ul>${d.profissoes.map(x => `<li>${x}</li>`).join("")}</ul>
      <h4>Cursos para explorar</h4><ul>${d.cursos.map(x => `<li>${x}</li>`).join("")}</ul>
      <h4>Mulheres inspiradoras</h4><ul>${d.mulheres.map(x => `<li>${x}</li>`).join("")}</ul>
      <a class="mais" href="index.html#${a}">Ver esta área no Margaret.if</a></article>`;
  }).join("");
  mostrar("resultado");
}

$("#comecar").onclick = () => { atual = 0; respostas = []; mostrar("quiz"); desenhar(); };
$("#voltar").onclick = () => { if (atual > 0) { atual--; desenhar(); } };
$("#refazer").onclick = () => { atual = 0; respostas = []; mostrar("quiz"); desenhar(); };
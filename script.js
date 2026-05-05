function calcularPontuacao() {
  var equipe = document.getElementById("equipe").value;
  var arroz = Number(document.getElementById("arroz").value) || 0;
  var feijao = Number(document.getElementById("feijao").value) || 0;
  var oleo = Number(document.getElementById("oleo").value) || 0;
  var leite = Number(document.getElementById("leite").value) || 0;
  var acoesSociais = Number(document.getElementById("acoesSociais").value) || 0;

  var pontosArroz = arroz * 10;
  var pontosFeijao = feijao * 8;
  var pontosOleo = oleo * 6;
  var pontosLeite = leite * 5;
  var pontosAcoes = acoesSociais * 100;

  var total = pontosArroz + pontosFeijao + pontosOleo + pontosLeite + pontosAcoes;

  var classificacao = "";

  if (total >= 1000) {
    classificacao = "Excelente! A equipe atingiu a meta principal.";
  } else if (total >= 600) {
    classificacao = "Muito bom! A equipe teve ótimo desempenho.";
  } else if (total >= 300) {
    classificacao = "Bom resultado! A equipe está no caminho certo.";
  } else {
    classificacao = "Pontuação inicial. Ainda é possível melhorar bastante.";
  }

  if (equipe.trim() === "") {
    equipe = "Equipe sem nome";
  }

  document.getElementById("resultado").innerHTML =
    "<strong>" + equipe + "</strong><br><br>" +
    "Pontuação total: <strong>" + total + " pontos</strong><br>" +
    "Arroz: " + pontosArroz + " pontos<br>" +
    "Feijão: " + pontosFeijao + " pontos<br>" +
    "Óleo: " + pontosOleo + " pontos<br>" +
    "Leite: " + pontosLeite + " pontos<br>" +
    "Ações sociais: " + pontosAcoes + " pontos<br><br>" +
    classificacao;

  var porcentagem = (total / 1000) * 100;
  if (porcentagem > 100) {
    porcentagem = 100;
  }

  document.getElementById("progresso").style.width = porcentagem + "%";
}

function limparCampos() {
  document.getElementById("equipe").value = "";
  document.getElementById("arroz").value = 0;
  document.getElementById("feijao").value = 0;
  document.getElementById("oleo").value = 0;
  document.getElementById("leite").value = 0;
  document.getElementById("acoesSociais").value = 0;
  document.getElementById("resultado").innerHTML = "Preencha os campos para visualizar a pontuação.";
  document.getElementById("progresso").style.width = "0%";
}

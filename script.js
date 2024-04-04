let transacoes = [];

document.getElementById("adicionar").addEventListener("click", adicionarTransacao);
document.getElementById("gerarRelatorio").addEventListener("click", gerarRelatorio);

function adicionarTransacao() {
  let tipo = document.getElementById("tipo").value;
  let valor = parseFloat(document.getElementById("valor").value);
  let categoria = document.getElementById("categoria").value;

  const transacao = { tipo, valor, categoria };
  transacoes.push(transacao);

  document.getElementById("valor").value = "";

  alert("Transação adicionada com sucesso!");
}

function gerarRelatorio() {
  const relatorioDiv = document.getElementById("relatorio");
  relatorioDiv.innerHTML = ""; // Limpa o conteúdo anterior

  let totalReceitas = 0;
  let totalDespesas = 0;

  let tabelaHTML = "<h2>Relatório de Gastos</h2>";

  tabelaHTML += "<h3>Transações</h3>";
  tabelaHTML += "<table>";
  tabelaHTML += "<tr><th>Tipo</th><th>Categoria</th><th>Valor</th></tr>";

  transacoes.forEach(transacao => {
    tabelaHTML += "<tr>";
    tabelaHTML += "<td>" + transacao.tipo.charAt(0).toUpperCase() + transacao.tipo.slice(1) + "</td>";
    tabelaHTML += "<td>" + transacao.categoria + "</td>";
    tabelaHTML += "<td>R$" + transacao.valor.toFixed(2) + "</td>";
    tabelaHTML += "</tr>";

    if (transacao.tipo === "receita") {
      totalReceitas += transacao.valor;
    } else {
      totalDespesas += transacao.valor;
    }
  });

  tabelaHTML += "</table>";

  tabelaHTML += "<h3>Total de Receitas</h3>";
  tabelaHTML += "<p>Total: R$" + totalReceitas.toFixed(2) + "</p>";

  tabelaHTML += "<h3>Total de Despesas</h3>";
  tabelaHTML += "<p>Total: R$" + totalDespesas.toFixed(2) + "</p>";

  tabelaHTML += "<h3>Saldo Atual</h3>";
  tabelaHTML += "<p>Saldo: R$" + (totalReceitas - totalDespesas).toFixed(2) + "</p>";

  relatorioDiv.innerHTML = tabelaHTML;
}

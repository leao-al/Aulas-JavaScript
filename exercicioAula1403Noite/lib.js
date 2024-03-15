function calcularDesconto(valor) {
    return valor * 0.1;
  }
  
  function calcularJuros(valor, parcelas) {
    if (parcelas <= 1) {
      return 0;
    } else if (parcelas <= 4) {
      return (valor * 0.1) / parcelas;
    } else {
      return (valor * 0.1) / parcelas;
    }
  }
  
  function calcularValorFinal() {
    const valor = parseFloat(document.getElementById('valor').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);
  
    let valorFinal = valor;
  
    if (parcelas <= 1) {
      valorFinal -= calcularDesconto(valor);
    } else {
      valorFinal += calcularJuros(valor, parcelas);
    }
  
    const valorParcela = valorFinal / parcelas;
  
    document.getElementById('resultado').innerHTML = `
      <ul>
        <li>Valor Final: R$ ${valorFinal.toFixed(2)}</li>
        <li>Parcelas: ${parcelas}</li>
        <li>Valor da Parcela: R$ ${valorParcela.toFixed(2)}</li>
        <li>Detalhamento das Parcelas:</li>
      </ul>
    `;
  
    for (let i = 1; i <= parcelas; i++) {
      document.getElementById('resultado').innerHTML += `
        <li>Parcela ${i}: R$ ${(valorFinal / parcelas).toFixed(2)}</li>
      `;
    }
  }
  
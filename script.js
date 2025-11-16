// Taxas de câmbio (você pode atualizar estas valores)
const taxas = {
    'R$ Real Brasileiro': { 'R$ Real Brasileiro': 1, '$ Dólar Americano': 0.20, '€ Euro': 0.18 },
    '$ Dólar Americano': { 'R$ Real Brasileiro': 5.00, '$ Dólar Americano': 1, '€ Euro': 0.92 },
    '€ Euro': { 'R$ Real Brasileiro': 5.50, '$ Dólar Americano': 1.09, '€ Euro': 1 }
};

const selectDe = document.querySelectorAll('select')[0];
const selectPara = document.querySelectorAll('select')[1];
const inputValor = document.querySelector('input[type="number"]');
const botaoConverter = document.querySelector('button');

// Elementos de saída
const moedaOutputs = document.querySelectorAll('.moeda b');
const moedaNomes = document.querySelectorAll('.moeda p');

// Função para aplicar máscara de moeda
function aplicarMascaraMoeda(event) {
    let valor = event.target.value;
    
    // Remove tudo que não é número
    valor = valor.replace(/\D/g, '');
    
   
}

// Função para obter o valor numérico do input
function obterValorNumerico() {
    const valor = inputValor.value.replace(/\D/g, '');
    return parseInt(valor) || 0;
}

// Função para realizar a conversão
function realizarConversao() {
    const valor = obterValorNumerico() / 100; // Converte para decimal (centavos)
    const moedaDe = selectDe.value;
    const moedaPara = selectPara.value;

    if (isNaN(valor) || valor <= 0) {
        moedaOutputs[1].textContent = moedaPara.split(' ')[0] + ' 0,00';
        moedaNomes[1].textContent = moedaPara.split(' ')[2] || 'N/A';
        return;
    }

    // Calcula a taxa de câmbio
    const taxa = taxas[moedaDe][moedaPara];
    const resultado = valor * taxa;

    // Atualiza o primeiro card com o valor de entrada
    const simboloDe = moedaDe.split(' ')[0];
    moedaOutputs[0].textContent = simboloDe + ' ' + valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    moedaNomes[0].textContent = moedaDe.split(' ')[2] || moedaDe.split(' ')[1];

    // Atualiza o segundo card com o valor convertido
    const simboloPara = moedaPara.split(' ')[0];
    moedaOutputs[1].textContent = simboloPara + ' ' + resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    moedaNomes[1].textContent = moedaPara.split(' ')[2] || moedaPara.split(' ')[1];
}

// Event listeners
botaoConverter.addEventListener('click', realizarConversao);
inputValor.addEventListener('input', aplicarMascaraMoeda);
inputValor.addEventListener('input', realizarConversao);
selectDe.addEventListener('change', realizarConversao);
selectPara.addEventListener('change', realizarConversao);

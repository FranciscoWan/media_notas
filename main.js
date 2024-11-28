const form = document.getElementById('atividade');
const imgAprovado = '<img src="./image/Emoji festejando.png" alt="Emoji festejando">';
const imgReprovado = '<img src="./image/Emoji triste.png" alt="Emoji triste">';
let linhas = "";

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    // Criação da nova linha
    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += "</tr>"; // Fechamento correto da linha

    // Adiciona a nova linha ao conteúdo existente
    linhas += linha;

    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas; // Atualiza o conteúdo da tabela

    // Limpa os campos do formulário após o envio
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
});
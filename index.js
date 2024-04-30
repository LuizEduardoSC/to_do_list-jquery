document.getElementById('form-tarefa').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o recarregamento da página
    adicionarTarefa();
});

function adicionarTarefa() {
    var nomeTarefa = $('#nome-tarefa').val().trim();
    if (nomeTarefa !== '') {

        $('#listaTarefas').append($('<li>').text(nomeTarefa));
        $('#nome-tarefa').val(''); // Limpa o campo de texto
    } else {
        alert('Por favor, insira o nome da tarefa.');
    }
}

// Novo código para adicionar o efeito de linha sobre o texto
$('#listaTarefas').on('click', 'li', function () {
    $(this).toggleClass('tarefa-concluida');
});

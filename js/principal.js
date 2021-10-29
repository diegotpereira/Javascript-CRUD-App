var data = document.getElementById('data')
var usuarioLista = document.getElementById('usuarioLista')


// Adicionar Código de Usuario
var contar = 0;

function AddUsuario() {
    var entradaDados = document.getElementById('data').value
    var html = '<div class="row" id="data ' + contar + '" style ="margin-bottom:15px;">' +
        '<div class="col-md-6 col-sm-12 col-xs-12">' +
        '<input type="text" class="form-control" value="' + entradaDados + '" disabled>' +
        '</div>' +
        '<div class="col-md-2 col-sm-4 col-xs-4">' +
        '<button type="button" class="btn btn-success" onclick="editar(this.id)" id="editar ' + contar + '">Editar</button>' +
        '</div>' +

        '<div class="col-md-2 col-sm-4 col-xs-4">' +
        '<button type="button" class="btn btn-success" onclick="atualizar(this.id)" id="atualizar ' + contar + '">Atualizar</button>' +
        '</div>' +

        '<div class="col-md-2 col-sm-4 col-xs-4">' +
        '<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="deletar ' + contar + '">Deletar</button>' +
        '</div>' +
        '</div>';

    document.getElementById('usuarioLista').insertAdjacentHTML('beforeend', html)
    contar++
}

function editar(editarId) {
    var parent = document.getElementById(editarId).parentNode.parentNode
    var filho = parent.firstChild.firstChild
    filho.removeAttribute('disabled')
    console.log(filho)
}

function atualizar(atualizarId) {
    var parent = document.getElementById(atualizarId).parentNode.parentNode
    var filho = parent.firstChild.firstChild
    filho.setAttribute("disabled", 'disabled')
    console.log(filho)
}

function remove(delatarId) {
    var parent = document.getElementById(delatarId).parentNode.parentNode
    parent.remove()
    console.log(parent)
}
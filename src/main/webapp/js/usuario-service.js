UsuarioService = function () {

    this.usuarios = [];
    //criando CREATE
    this.adicionar = function (usu) {
        this.usuarios.push(usu);
    }
    //buscando RETRIEVE
    this.buscarTodos = function () {
        return this.usuarios;
    }
    //remover do vetor REMOVE
    this.excluir = function (indice) {
        //Remover do vetor
        this.usuarios.splice(indice, 1);

    }
    //alterar no vetor UPDATE
    this.alterar = function (indice, usu) {
        this.usuarios.splice(indice, 1, usu);

    }
    this.buscarPorIndice = function (indice) {
        return this.usuarios[indice];
    }
}
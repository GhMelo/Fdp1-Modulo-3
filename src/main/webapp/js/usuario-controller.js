

UsuarioController = function () {
    this.UsuarioService = new UsuarioService();

    this.modoEdicao = false;

    //dom


    this.renderizarTabelaUsuarios = function (arrUsuarios) {
        dados = "";
        for (i = 0; i < arrUsuarios.length; i++) {
            dados += "<tr>";
            dados += "<td>" + arrUsuarios[i].nome + "</td>";
            dados += "<td>" + arrUsuarios[i].senha + "</td>";
            dados += "<td><input type='button' value= 'Excluir' onclick='uc.aoClicarExcluir(" + i + ")'></td>";
            dados += "<td><input type='button' value= 'Editar' onclick='uc.aoClicarEditar(" + i + ")'></td>";
            dados += "</tr>"
        }
        document.getElementById("tbUsuarios").innerHTML = dados;

    }
    //Eventos
    this.aoClicarSalvar = function () {
        //leitura de dados
        nomeUsuario = document.getElementById("txtUsuario").value;
        senhaUsuario = document.getElementById("txtSenha").value;
        //constroi um objeto usuario
        usu = { nome: nomeUsuario, senha: senhaUsuario };
        if (this.modoEdicao == false) {
            //adiciona no vetor
            this.UsuarioService.adicionar(usu);
        } else {
            this.UsuarioService.alterar(this.indiceEdicao, usu);
        }

        this.limparCampos();
        this.sairModoEdicao();

    }
    this.aoClicarListar = function () {
        usuarios = this.UsuarioService.buscarTodos();
        this.renderizarTabelaUsuarios(usuarios);
    }
    this.aoClicarExcluir = function (indice) {
        this.UsuarioService.excluir(indice);
    }
    this.aoClicarEditar = function (indice) {
        this.entrarModoEdicao();
        this.indiceEdicao = indice;

        usuario = this.UsuarioService.buscarPorIndice(indice);
        document.getElementById("txtUsuario").value = usuario.nome;
        document.getElementById("txtSenha").value = usuario.senha;

    }
    this.limparCampos = function () {
        //limpa dados da tela
        document.getElementById("txtUsuario").value = "";
        document.getElementById("txtSenha").value = "";
    }
    this.entrarModoEdicao = function () {
        this.modoEdicao = true;
    }
    this.sairModoEdicao = function () {
        this.modoEdicao = false;
    }

    this.aoClicarCancelar = function () {


        this.modoEdicao = false;
        this.limparCampos();

    }


}
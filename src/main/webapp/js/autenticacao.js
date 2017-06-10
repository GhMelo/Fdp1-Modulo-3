//classe
	Autenticacao =function(){}

	//metodo
	Autenticacao.prototype.validarCampos =function(){

		 elementoUsuario = document.getElementById("txtUsuario");
		 textoDigitadoUsuario = elementoUsuario.value;
		 
		 elementoSenha = document.getElementById("txtSenha");
		 textoDigitadoSenha = elementoSenha.value
		 
		if(textoDigitadoUsuario=="" || textoDigitadoSenha=="" ){
			 window.alert("#Os campos USUARIO e SENHA devem ser digitados!#");
			 return false;
		}else{
		 
		 return false;
		}
	  }
	  //instanciando objeto
	  aut = new Autenticacao();
	
function Command(){	
	this.coms = [{name:"help", access:false}, 
				 {name:"reg", access:false}, 
				 {name:"login", access:false}, 
				 {name:"trans", access:true}, 
				 {name:"logout", access:true}, 
				 {name:"clear", access:false},
				 {name:"consign", access:true}];
	this.usu = new User();
}


Command.prototype.help = function(ac){
	return "Comandos:\n"+
		"  reg:       Registra las credenciales del usuario\n"+
		"  login:     Solicita las credenciales de acceso al usuario\n"+
		"  trans:     Solicita los datos del destinatario de la transacción y su respectivo monto\n"+
		"  logout:    Cierra la sesión con el wallet\n"+
		"  consign:   Añade dinero a la cuenta\n"+
		"  clear:     limpiar la pantalla\n>";
};

Command.prototype.reg = function(ac){
	if(ac==this.coms[1].access){
			return "\n REGISTRO DE USUARIO\n Para realizar el registro de su cuenta le solicitaremos unicamente su nombre, su usuario y contraseña.\n"+
										"*** Nota: Esta información debe ser suministrada unicamente por usted por lo que no divulgue las credenciales de acceso ***\n"+
										"          Una vez diligenciados los 3 campos presiona enter con el cursor colocado al final de la contraseña. De lo contrario no se registrara correctamente.\n"+
										"          El sistema permite el uso de caracteres especiales y mayusculas por lo que tenga cuidado al ingresar sus datos."+
										"\nNombre     ->"+
										"\nUsuario    ->"+
										"\nContraseña ->";
	}
};


Command.prototype.login = function(ac){
	if(ac==this.coms[2].access){
		return"------------- Login --------------\n"+
				"Usuario    ->\n"+
				"Contraseña ->";
	}
};

Command.prototype.trans = function(ac){
	var s="";
	if(ac==this.coms[3].access){
		return "---------- Transacción -----------\n"+
				"Ip Destino ->\n"+
				"Monto      ->";
	}
};

Command.prototype.consign = function(ac){
	var s="";
	if(ac==this.coms[3].access){
		
	}
};


document.getElementById("prompt").addEventListener("keyup",comando);
var msnIni="Consola de comandos - Manejo de Wallet(Blockchain)\n*** Nota: No borrar el símbolo '>' de la consola ***\n>"
document.getElementById("prompt").value=msnIni;
var consola= document.getElementById("prompt");
var permiso=false;
var search = new Command();
var stor = false;
if(typeof(Storage)!== "undefined"){
	stor=true;
} else {
	alert("Su navegador no permite el almacenamiento de datos en LocalStorage");
}

/*var arrayData = "";
var archivoTxt = new XMLHttpRequest();
var fileRuta = 'data.txt';
archivoTxt.open("GET", fileRuta, false);
archivoTxt.send(null);
var txt = archivoTxt.responseText;*/
try{
	search.usu.setName(localStorage.getItem("Nombre"));
	search.usu.setUserName(localStorage.getItem("Usuario"));
	search.usu.setPassword(localStorage.getItem("Contraseña"));
} catch(e){
	alert("Primer ingreso");
}

function comando(evento){
	if(evento.keyCode == "13"){
		var ac=false;
		var com="";
		var i = consola.value.length-2;
		while(consola.value.charAt(i)!= '>'){
			com=consola.value.charAt(i)+com;
			i--;
		}
		com=com.toLowerCase();
		var exists = true;
		switch(com){
			case "help":
				consola.value=consola.value+search.help(permiso);
				break;
			case "reg":
				if(!permiso){
					exists = true;
			    	if(search.usu.getName() == undefined){
			    		exists=false;
			    	}
					if(!exists){
						document.getElementById("prompt").removeEventListener("keyup",comando);
						document.getElementById("prompt").addEventListener("keyup",registro);
						consola.value=consola.value+search.reg(permiso);
					} else {
						consola.value=consola.value+"* Ya se ha registrado anteriormente *\n>";
					}
				} else {
					consola.value=consola.value+"* Ya se ha registrado anteriormente *\n>";
				}
				
				break;
			case "login":
				if(!permiso){
					exists=true;
					if(search.usu.getName() == undefined ){
			    		exists=false;
			    	}
					if(exists){
						document.getElementById("prompt").removeEventListener("keyup",comando);
						document.getElementById("prompt").addEventListener("keyup",acceder);
						consola.value=consola.value+search.login(permiso);
					} else {
						consola.value=consola.value+"* Aun no se ha registrado. Por favor registrese ingresando 'reg' en la consola *\n>";
					}

				} else {
					consola.value=consola.value+"* Ya ha iniciado sesión *\n>";
				}
				break;
			case "trans":
				if(permiso){
					document.getElementById("prompt").removeEventListener("keyup",comando);
					document.getElementById("prompt").addEventListener("keyup",trans);
					consola.value=consola.value+search.trans(permiso);
				}  else {
					consola.value=consola.value+"* Aun no se ha iniciado sesión *\n>";
				}
				break;
			case "logout":
				if(permiso){
					permiso=false;
					consola.value=consola.value+"--- Sesión Finalizada ---\n>";
				} else {
					consola.value=consola.value+"* Aun no se ha iniciado sesión *\n>";
				}
				break;
			case "clear":
				consola.value=msnIni;
				break;
			default:
				consola.value=consola.value+"El comando '"+com+"' no existe. \nPara información de los comandos disponibles ingrese 'help'\n>";
				break;
		}
		
	}
}

function registro (evento){
	if(evento.keyCode == "13"){
		//var search = new Command();
		var nom="",con="",usu="";
		var i = consola.value.length-2;
		while(consola.value.charAt(i) != ">"){
			if(consola.value.charAt(i).charCodeAt() >= 32){
				con = consola.value.charAt(i) + con;
			}
			i--;
		}
		i=i-13;
		while(consola.value.charAt(i) != ">"){
			if(consola.value.charAt(i).charCodeAt() >= 32){
				usu = consola.value.charAt(i) + usu;
			}
			i--;
		}
		i=i-13;
		while(consola.value.charAt(i) != ">"){
			if(consola.value.charAt(i).charCodeAt() >= 32){
				nom = consola.value.charAt(i) + nom;
			}
			i--;
		}
		if(nom.length != 0 && con.length != 0 && usu.length != 0){
			search.usu.setName(nom);
			search.usu.setUserName(usu);
			search.usu.setPassword(con);
			localStorage.setItem("Nombre",nom);
			localStorage.setItem("Usuario",usu);
			localStorage.setItem("Contraseña",con);
			consola.value=consola.value+"\n-------- Usuario registrado ---------\n>";
		} else {
			consola.value=consola.value+"\n*** Hubo un error en el ingreso de los datos por favor revise las restricciones de registro***\n>";
			consola.value=consola.value+"-------- Usuario  No registrado ---------\n>";
		}
		document.getElementById("prompt").addEventListener("keyup",comando);
		document.getElementById("prompt").removeEventListener("keyup",registro);
	}
}

function acceder(evento){
	if(evento.keyCode == "13"){
		var con="",usu="";
		var i = consola.value.length-2;
		while(consola.value.charAt(i) != ">"){
			con = consola.value.charAt(i) + con;
			i--;
		}
		i=i-14;
		while(consola.value.charAt(i) != ">"){
			usu = consola.value.charAt(i) + usu;
			i--;
		}
		search.usu.validate(usu,con);
		if(search.usu.access){
			var nom = search.usu.name;
			con="";
			i = 0;
			while(nom.charAt(i) != " " && i!=nom.length){
				con = con+nom.charAt(i);
				i++;
			}
			consola.value=consola.value+"\n------- Acceso Concedido ---------\n\n"+
										"+----------------------------------+\n"+
										"      Bienvenido  "+con+"\n"+
										"+----------------------------------+";
			permiso=true;

		} else {
			consola.value=consola.value+"\n------- Acceso Denegado ----------";
			permiso=false;
		}
		document.getElementById("prompt").addEventListener("keyup",comando);
		document.getElementById("prompt").removeEventListener("keyup",acceder);
		consola.value=consola.value+"\n>";
	}
}

function trans(evento){
	if(evento.keyCode == "13"){
		var ip="",mon="";
		var i = consola.value.length-2;
		while(consola.value.charAt(i) != ">"){
			ip = consola.value.charAt(i) + ip;
			i--;
		}
		i=i-13;
		while(consola.value.charAt(i) != ">"){
			mon = consola.value.charAt(i) + mon;
			i--;
		}
		//
		//Envio de solicitud a otro nodo
		//
		document.getElementById("prompt").addEventListener("keyup",comando);
		document.getElementById("prompt").removeEventListener("keyup",trans);
		consola.value=consola.value+"\n>";
	}
}
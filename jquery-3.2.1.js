function Login(){ 
	var done=0; 
	var usuario=document.login.usuario.value; 
	var password=document.login.password.value;

	if (usuario=="balta@whoami.com" && password=="balta098admi") { 
		window.location="whoami/whoami.html";

	} 

	if (usuario=="angel@whoami.com" && password=="angel099admi") { 
		window.location="whoami/whoami.html"; 
	} 

	if (usuario=="bx1@whoami.com" && password=="bx1admi097") { 
		window.location="whoami/whoami.html";
	} 

	if (usuario=="cripto@whoami.com" && password=="cripto69admi") { 
		window.location="whoami/whoami.html"; 
	} 
	else {
       swal ( "Oops" ,  "Cuenta no registrada!" ,  "error" )
	}
} 

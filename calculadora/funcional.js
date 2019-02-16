var element = document.getElementById.bind(document);
var resultado = element("result");
var igual=false;
element("calculadora").onclick=function(e){
	
	var target = e.target;
	if(target&&target.matches("button.numero")){
		var operacion = target.id;
		if(resultado.textContent=="0" || igual){
			resultado.textContent = operacion;
			igual=false;
		}
		else
			resultado.textContent += operacion;
	}else{
		var operacion = target.id;
		if(operacion=="="){
			resultado.textContent = eval(resultado.textContent);
			igual=true;
		}
		else
			resultado.textContent="0";
	}

};

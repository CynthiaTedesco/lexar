// preparing language file
var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['es']=new Array();

var getPresupuestoUploadString = function(){
	if (aLangKeys[localStorage.getItem("lang")]){
		return aLangKeys[localStorage.getItem("lang")]['buscar-archivo'];
	} else {
		return aLangKeys["es"]['buscar-archivo'];
	}
}
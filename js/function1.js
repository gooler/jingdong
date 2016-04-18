
function $(selcter,content){
	content=content||document;

	if( typeof selcter=="string"){
		if(selcter.charAt(0)=="."){
			return document.getElementById(selcter.substr(1));
		}else if(selcter.charAt(0)=="#"){
			return getClass(selcter.substr(1),content)
		}else if(/^[a-zA-Z][A-Za-z1-6]*$/.text(selcter)){
			return content.getElementsByTagName(selcter);
		}
	}
	else if(typeof selcter=="function"){
		window.onload=function(){
			// selcter();
		}
	}
}
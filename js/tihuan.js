window.onload=function(){
	var box1=$(".box1")[0];
	// var boxT=$(".box1");
	var imgs=$(".box1C");
	var imgsW=parseInt(getStyle(imgs[0],'width'))
	var anniu=$('.boxdian1')
	var celanL=$('.celanL')[0];
	var celanR=$('.celanR')[0];
	var box=$('.box')[0];
	// var celanL=$('.celanL')[];

	 console.log(celanL);
	console.log(anniu);
	gda();
	var t=setInterval(gda,500);
	var index=0;
	function gda(){
		index++;
		animate(box1,{left:-imgsW},300,function(){
			
			box1.appendChild(getfirst(box1));
			box1.style.left=0;
			for(var i=0;i<imgs.length;i++){
		
		anniu[i].style.background='';
		}
			if(index>imgs.length-1){
				index=0;
			}
		anniu[index].style.background='red';
		})
		var fls=true;
		celanR.onclick=function(){
			index++
			if(!fls){return;}
			fls=false;
			animate(box1,{left:-imgsW},300,function(){
			
			
			box1.appendChild(getfirst(box1));
			box1.style.left=0;
			for(var i=0;i<imgs.length;i++){
		
			anniu[i].style.background='';
		}
			if(index>imgs.length-1){
				index=0;
			}
			anniu[index].style.background='red';
			fls=true;
		})

		}
		box.onmouseover=function(){
			clearInterval(t);
		}
		
		box.onmouseout=function(){
			t=setInterval(gda,500);
		}
			var fls1=true;	
		celanL.onclick=function(){
			if(!fls1){return;}
			fls1=false;
			box1.insertBefore(getlast(box1),getfirst(box1));

			box1.style.left=-imgsW+'px';
			animate(box1,{left:0},500,function(){
					fls1=true;

			})

		}
			

		
	}

	
}
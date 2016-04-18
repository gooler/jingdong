window.onload=function(){
	// var box1=$('.box1')[0];
	// var imgs=$('img');
	// var dian=$('div',$('.dianB')[0]);
	// var box=$('.box')[0];
	// var celanB=$('.celanB')[0];
	// var celanL=$('.celanL')[0];
	// var celanR=$('.celanR')[0];
	// console.log(imgs)
	// var imgW=parseInt(getStyle($('img')[0],'width'));
	// // alert(imgW)
	// // console.log(box1)
	// imgs[0].style.left=0;
	// 	 var now=0;
	// 	 var next=0;
	// 	 var fls=true;
	// 	 var t=setInterval(Srl,1000)
	
	// function Srl(){
	// 	if(!fls){return;}
	//  	fls=false;
	//  	next++;
	//  	if(next==imgs.length){
	//  		next=0;
	//  	}
	//  	imgs[next].style.left=imgW+'px';
	//  	animate(imgs[now],{left:-imgW},300);
	//  	animate(imgs[next],{left:0},300,
	//  			function(){
	//  				fls=true;
	//  			}
	//  		);
	 	
	//  	dian[now].className='';
	//  	dian[next].className='hot';

	// 	now=next;
		
	//  }

	//  box.onmouseover=function(){
	//  	clearInterval(t);
	//  	celanB.style.display='block';
	//  }
	//   box.onmouseout=function(){
	//  	t=setInterval(Srl,1000);
	//  	celanB.style.display='';
	//  }
	 
	//  celanR.onclick=function(){
	//  	Srl();
	//  }
	//  for(var i=0;i<dian.length;i++){
	//  	dian[i].index=i;
	//  	dian[i].onmouseover=function(){
	//  		animate(imgs[now],{left:-imgW},300);
	//  		animate(imgs[this.index],{left:0},300);
	//  }

	//  }
	 // var box=$('.box')[0];
	 // var speedx=100;
	 // var speedy=100;
	 // var W=document.documentElement.clientWidth;
	 // var H=document.documentElement.clientHeight;
	 // var BoxW=box.offsetWidth;
	 // var BoxH=box.offsetHeight;
	 // var x=0;
	 // var y=0;
	 // var t=setInterval(move,500)
	 // function move(){
	 // 	x+=speedx; 
	 // 	y+=speedy;
	 // 	if(x+BoxW>W||x-BoxW<0){
	 // 		speedx*=-1;
	 // 	}
	 // 	if(y+BoxH>H||y-BoxH<0){
	 // 		speedy*=-1;
	 // 	}
	 // 	animate(box,{left:x,top:y},500);
	 	
	 	
		// }
		// box.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// box.onmouseout=function(){
		// 	t=setInterval(move,500)
		// }
		// var but=$('.but')[0];
		// var flag=true;
		// but.onclick=function(){
		// 	if(!flag){
		// 		t=setInterval(move,500);
		// 	}
		// 	clearInterval(t);
		// 	box.onmouseout='null';
		// 	box.style.cssText="left:-80px;top:0;"
		// 	flag=false;
		// }
		var boxL=$('.boxL')[0];
		var boxR=$('.boxR')[0];
		var box=$('.box')[0];
		var T=boxL.offsetTop;
		
		alert(T);
		window.onscroll=function(){
			var doc=document.body?document.body:document.documentElement;
			boxL.style.top=doc.scrollTop+T+'px';
			boxR.style.top=doc.scrollTop+T+'px';
		}
	}
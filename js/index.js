window.onload=function(){
	var anniu=getClass('main1-titleR')[0].getElementsByTagName('div');//选项按钮
	// alert(anniu);
	// console.log(anniu);
	var con=getClass('main-boxR1');
	// console.log(con);
	var lunbo1=getClass('main-boxR1-4')[0].getElementsByTagName('img');
	// console.log(lunbo1[0]);
	var dian=getClass('main-boxR1-4D')[0].getElementsByTagName('div');
	 // console.log(dian);
	var lunbo2=getClass('main-boxR1-4B');
	 //console.log(lunbo2)
	var butC=getClass('main-boxR1-4C')[0].getElementsByTagName('div');
	//console.log(butC);
	var butCON=getClass('main-boxR1-4C')[0];
	console.log(butCON)
	for(var i=0;i<anniu.length;i++){
		anniu[i].index=i;
		anniu[i].onmouseover=function(){
			for(var j=0;j<anniu.length;j++){
				con[j].style.zIndex=0;
			}
			con[this.index].style.zIndex=20;
			anniu[this.index].style.cssText="border:1px solid red;border-top:2px solid red;border-bottom:1px solid #ffffff;"

		}
		anniu[i].onmouseout=function(){
			anniu[this.index].style.border="none";
		}
	}
	//轮播的函数

	var numb=0;

	var t0=setInterval(mov,1000)
	mov();
	function mov(){
		// alert(1)
		numb++;
		for(var i=0;i<dian.length;i++){
			lunbo1[i].style.zIndex=0;
			dian[i].style.background="";
		}

		if(numb>3){
			numb=0;
		}
		dian[numb].style.background="red";
		lunbo1[numb].style.zIndex=10;
	}
		
	
	//移动上去控制轮播图得停止与运行以及左右键的显示与消失
	lunbo2[0].onmouseover=function(){
		clearInterval(t0);
		butCON.style.display="block";
	}
	lunbo2[0].onmouseout=function(){
		t0=setInterval(mov,1000);
		butCON.style.display="none";
	}

	//利用轮播图上的按钮控制轮播图
	for(var l=0;l<dian.length;l++){
		dian[l].index=l;  //	获取dian的下标
		dian[l].onmouseover=function(){
			for(var m=0;m<dian.length;m++){
				lunbo1[m].style.zIndex=0;
					dian[m].style.background="";
			}
			lunbo1[this.index].style.zIndex=11;
			dian[this.index].style.background="red";
		}
	}

	//控制轮播左右键

	butC[1].onclick=function(){
		// alert('1')
		mov();
	}

	butC[0].onclick=function(){
		// alert('2')
		numb--;
		for(var i=0;i<dian.length;i++){
			lunbo1[i].style.zIndex=0;
			dian[i].style.background="";
		}

		if(numb<0){
			numb=dian.length-1;
			// alert(dian.length)
		}
		dian[numb].style.background="red";
		lunbo1[numb].style.zIndex=10;

	}
	//右侧栏的淡出
	var tiaoBox=$('.tiaoBox')[0];
	var tiaoUp=$('.tiaoUp');
	var tiaoDown=$('.tiaoDown');
	for(var i=0;i<tiaoUp.length;i++){
	 movX(tiaoUp[i],tiaoDown[i]);			//tiaoUp=up, tiaoDown=down;
	}
	function movX(up,down){
		up.onmouseover=function(){
		animate(down,{right:30},300);
	}
	up.onmouseout=function(){
		setTimeout(function(){
			animate(down,{right:-90},300);
		 },100)
	}
	tiaoDown.onmouseover=function(){
		up.onmouseout='null';
		animate(down,{right:30},300);
	}
	tiaoDown.onmouseout=function(){
		animate(down,{right:-90},300);		 
	}
	}
	
//一楼开始
	var bannerP=getClass('image')[0].getElementsByTagName('div');
	// console.log( bannerP);
	var bannerbut=getClass('bannerdianBox')[0].getElementsByTagName('a');
	// console.log(bannerbut);
	var bannerBOX=getClass('imageBOX')[0];
	// console.log(bannerBOX);
	var Bcelan=getClass('Bcelan')[0];
	var BcelanL=getClass('Bcelan')[0].getElementsByTagName('div')[0];
	var BcelanR=getClass('Bcelan')[0].getElementsByTagName('div')[1];
	// console.log(BcelanL);
	var main4B1=getClass('main4-B1')[0].getElementsByTagName('img')[0];//获得新发现图片
	// console.log(main4B1);
	var main4B2=getClass('main4-B2')[0].getElementsByTagName('img')[0];
	var num=0;
	var t1=setInterval(mov1,1000)
	mov1();
	function mov1(){
		num++;
		if(num>bannerP.length-1){
			num=0;
		}
		for(var i=0;i<bannerP.length;i++){
			bannerP[i].style.zIndex=0;
			 bannerbut[i].className='';
		}
		bannerbut[num].className='hot'
		bannerP[num].style.zIndex=20;
				}
	//移动停止轮播图
	bannerBOX.onmouseover=function(){

		clearInterval(t1);
		Bcelan.style.display='block';
	}
	bannerBOX.onmouseout=function(){
		t1=setInterval(mov1,1000);
		Bcelan.style.display='';
	}
	//通过按钮控制轮播图
	for(var i=0;i<bannerbut.length;i++){
		bannerbut[i].index=i;
		bannerbut[i].onmouseover=function(){
			for(var j=0;j<bannerbut.length;j++){
				bannerP[j].style.zIndex=0;
				bannerbut[j].className='';
			}

			bannerP[this.index].style.zIndex=10;
			bannerbut[this.index].className='hot';
			num=this.index;
		}
	}
	//左右按钮的控制轮播图
	BcelanR.onclick=function(){
		// alert(1)
		mov1();
	}
	BcelanL.onclick=function(){
		num--;
		if(num<0){
			num=bannerP.length-1;
		}
		for(var i=0;i<bannerP.length;i++){
			bannerP[i].style.zIndex=0;
			bannerbut[i].className='';
		}
		bannerP[num].style.zIndex=12;
		bannerbut[num].className='hot';
	}
	//新发现动画函数左右移动
	main4B1.onmouseover=function(){
		animate(main4B1,{left:20},500)
	}
	main4B1.onmouseout=function(){
		animate(main4B1,{left:0},500)
	}
	main4B2.onmouseover=function(){
		animate(main4B2,{left:20},500)
	}
	main4B2.onmouseout=function(){
		animate(main4B2,{left:0},500)
	}
	//banner结束


	//e二楼开始
	var main2BoxRC11BC=getClass('main2BoxRC1-1BC')[0];//获取2楼第一层侧滑
	var main2BoxRC11BC1=getClass('main2BoxRC1-1BC')[0].getElementsByTagName('div');
	var main2Btu=getClass('main2BoxRC1-1BC1')[0].getElementsByTagName('img')[0];
	var main2BtuW=parseInt(getStyle( main2Btu,'width'));
	var main2BoxRC11B=getClass('main2BoxRC1-1B')[0];
	var main2dian=getClass('main2dian')[0].getElementsByTagName('a');
	var maincelanL=getClass('maincelan')[0].getElementsByTagName('a')[0];//提取侧栏按钮1
	var maincelanR=getClass('maincelan')[0].getElementsByTagName('a')[1];//提取侧栏按钮2
	var maincelan=getClass('maincelan')[0]
	var num2=0;
	var flag2=true;
		// alert(main2BtuW);
		console.log(main2BoxRC11BC1);
	var t=setInterval(mov2,1000)
		mov2();
	function mov2(){
		if(!flag2){return;}
		flag2=false;
		num2++;
		if(num2>main2BoxRC11BC1.length-1){
			num2=0;
		}
		for(var i=0;i<main2dian.length;i++){
			main2dian[i].className='';
		}

		main2dian[num2].className='hot';
 	 	animate( main2BoxRC11BC,{left:-main2BtuW*num2},500,function(){
 	 		flag2=true;
 	 	});
 	
	}
//左右键消失和出现的控制以及轮播图停止和运行的控制
	main2BoxRC11B.onmouseover=function(){
		clearInterval(t);
		maincelan.style.display='block';
	}
	main2BoxRC11B.onmouseout=function(){
		t=setInterval(mov2,1000);
		maincelan.style.display='none';
	}
	for(var i=0;i<main2dian.length;i++){
		main2dian[i].index=i;
		main2dian[i].onclick=function(){
			if(!flag2){return;}
			flag2=false;
			for(var j=0;j<main2dian.length;j++){
				main2dian[j].className='';
			}
			animate( main2BoxRC11BC,{left:-main2BtuW*this.index},500,function(){
				flag2=true;
			});
			main2dian[this.index].className='hot';
			num2=this.index;
		}
	}
	
	//左右键的控制
	maincelanR.onclick=function(){     
		mov2();
	}
	maincelanL.onclick=function(){
		if(!flag2){return;}
		flag2=false;
		num2--;
		if(num2==-1){
			num2=main2dian.length-1;
		}
		for(var i=0;i<main2dian.length;i++){
			main2dian[i].className='';
		}

		main2dian[num2].className='hot';
 	 	animate( main2BoxRC11BC,{left:-main2BtuW*num2},500,function(){
 	 		flag2=true;
 	 	});
	}
	//选项卡的开始
	var main2BoxRC=getClass('main2BoxRC')//获取九个图层
	// console.log(main2BoxRC);
	var main2titleR=getClass('main2-titleR')[0].getElementsByTagName('div');//获取选项卡的选项
	// console.log(main2titleR);
	for(var i=0;i<main2titleR.length;i++){
		main2titleR[i].index=i;
		main2titleR[i].onmouseover=function(){

			for(var j=0;j<main2titleR.length;j++){
				main2BoxRC[j].style.zIndex=0;
			}
			main2BoxRC[0].style.zIndex=9;
			main2BoxRC[this.index].style.zIndex=10;

		}
	}

	//    三楼开始
	var main3Btu=getClass('main3BoxRB1-1B')[0].getElementsByTagName('div')//获取动画图
	var main3BoxRB11B=getClass('main3BoxRB1-1B')[0];//获得动画大框
	var main3BtuW=parseInt(getStyle(main3Btu[0],'width'))//获得每个图片的宽度
	var main3BoxRB11=getClass('main3BoxRB1-1')[0];//获取固定图框
	var main3celan=getClass('main3celan')[0];//获取侧栏边框
	var main3celanL=getClass('main3celan')[0].getElementsByTagName('div')[0];//获取侧栏左边按钮
	var main3celanR=getClass('main3celan')[0].getElementsByTagName('div')[1];//获取侧栏右边按钮
	var main3dian=getClass('main3dian')[0].getElementsByTagName('a');//获取三楼点的按钮
	var num3=0;
	var fls=true;
	// alert(main3BtuW)
	// console.log(main3BoxRB11B)
	var t3=setInterval(mov3,1000)
	mov3();
	function mov3(){
		if(!fls){return}
		fls=false;
		num3++;
		if(num3> main3Btu.length-1){
			num3=0
		}
		for(var j=0;j<main3dian.length;j++){
			main3dian[j].className='';

		}
		
		animate(main3BoxRB11B,{left:-main3BtuW*num3},500,function(){
			fls=true;
		})
		main3dian[num3].className='hot';
	}
	//两侧按钮的控制
	main3BoxRB11.onmouseover=function(){
		clearInterval(t3);
		main3celan.style.display='block';
	}
	main3BoxRB11.onmouseout=function(){
		t3=setInterval(mov3,1000);
		main3celan.style.display='';
	}
	for(var i=0;i<main3dian.length;i++){
		main3dian[i].index=i;
		main3dian[i].onclick=function(){
			if(!fls){return;}
			fls=false;
			for(var j=0;j<main3dian.length;j++){
				main3dian[j].className='';
			}
			animate( main3BoxRB11B,{left:-main3BtuW*this.index},1000,function(){
				fls=true;
			});
			main3dian[this.index].className='hot';
			num3=this.index;
		}
	}
	main3celanR.onclick=function(){
		mov3();
	}
	main3celanL.onclick=function(){
		mov3();
	}
	// 三楼选项卡
	var main3BoxRB=$('.main3BoxRB');//图片
	var main3titleR1=$('.main3-titleR1')//选项
	// console.log(main3titleR1);
	xuan(main3titleR1,main3BoxRB);                         //选项卡万能公式
	function xuan(a,b){                  //a=选项，b=图片
		for(var i=0;i<b.length;i++){
		a[i].index=i;
		a[i].onmouseover=function(){
			for(var j=0;j<b.length;j++){
				b[j].style.zIndex=0;
			}
			b[this.index].style.zIndex=10;
		}
	}
	}
	//四楼轮播图
	var imgs1=$('img',$('.main4BoxRB1-1B')[0]);//获得每个图片
	var imgsB1=$('.main4BoxRB1-1B')[0];//获得每个图片框
	var imgsW1=parseInt(getStyle(imgs1[0],'width'));//获取图片宽度
	var main4dian=$('a',$('.main4dian')[0]);
	console.log( main4dian);
	var main4celan=$('.main4celan')[0];
	var main4celanL=$('div',$('.main4celan')[0])[0];
	var main4celanR=$('div',$('.main4celan')[0])[1];
	var main4BoxRB11=$('.main4BoxRB1-1')[0];
	// alert(imgsW)
	  // console.log(main4BoxRB11B);
	var t4=setInterval(mov4,1000);
	var num4=0;
	var fls=true;
	mov4(imgsB1,imgsW1);
	function mov4(){
		if(!fls){return;}
		fls=false;
		num4++;
		if(num4>imgs1.length-1){
			num4=0;
		}
		for(var j=0;j<imgs1.length;j++){
			main4dian[j].className='';

		}
		animate(imgsB1,{left:-imgsW1*num4},500,function(){
			fls=true;
		});
		main4dian[num4].className='hot';

	}
	main4BoxRB11.onmouseover=function(){
		clearInterval(t4);
		main4celan.style.display='block';
	}
	main4BoxRB11.onmouseout=function(){
		t4=setInterval(mov4,1000);
		main4celan.style.display='';
	}
	for(var i=0;i<imgs1.length;i++){
		main4dian[i].index=i;
		main4dian[i].onmouseover=function(){
			for(var j=0;j<main4dian.length;j++){
				main4dian[j].className='';
			}
			animate( imgsB1,{left:-imgsW1*this.index},500);
			main4dian[this.index].className='hot';
			num4=this.index;
		}
	}
	main4celanR.onclick=function(){
		mov4();
	}
	main4celanL.onclick=function(){
		mov4();
	}
	//六楼开始
	var imgs6B=$('div',$('.main6BoxRC2-1')[0]);//取出每个图片
	var imgs6=$('img',$('.main6BoxRC2-11')[0])[0];//获取每个图片
	var imgs6W=parseInt(getStyle(imgs6,'width'));//获取图片宽度
	var main6celan=$('.main6celan')[0];
	var main6celanL=$('.main6celanL')[0];
	var main6celanR=$('.main6celanR')[0];
	var main6BoxRC2=$('.main6BoxRC2')[0];
	var main6dian=$('.main6dian',$('.main6celandian')[0]);
	console.log(main6dian);
	var now=0;
	var next=0;
	var flag=true;
	var t6=setInterval(Srl,1000);
	imgs6B[0].style.left=-imgs6W+'px';
	function Srl(){
		if(!flag){return;}
		flag=false;
		mov6(imgs6,imgs6W,imgs6B);
		function mov6(imgs,imgsW,imgsB){
			next++;
		if(next>imgsB.length-1){
			next=0;
		}
		for(var j=0;j<main6dian.length;j++){
			main6dian[j].style.backgroundColor='';
		}
		main6dian[now].style.backgroundColor='red';
		imgsB[next].style.left=0;
		animate(imgsB[now],{left:-imgsW*2},300);
		animate(imgsB[next],{left:-imgsW},300,function(){
			flag=true;
		});
		now=next;
		}	
		
	}
	main6BoxRC2.onmouseover=function(){
		clearInterval(t6);
		main6celan.style.display='block';
	}
	main6BoxRC2.onmouseout=function(){
		t6=setInterval(Srl,1000);
		main6celan.style.display='';
	}
	//侧栏控制轮播图
	main6celanR.onclick=function(){
		Srl();
	}
	main6celanL.onclick=function(){
		if(!flag){return;}
		flag=false;
		next--;
		if(next<0){
			next=imgs6B.length-1;
		} 
		for(var j=0;j<main6dian.length;j++){
			main6dian[j].style.backgroundColor='';
		}
		main6dian[now].style.backgroundColor='red';
		imgs6B[next].style.left=-imgs6W*2+'px';
		animate(imgs6B[now],{left:0},300);
		animate(imgs6B[next],{left:-imgs6W},300,function(){
			flag=true;
		});
		now=next;
	}
	//选项卡
	var main6title=$('.main3-titleR1',$('.main6-title')[0]);
	var main6BoxRC=$('.main6BoxRC',$('.main6BoxR')[0]);
	// console.log(main6BoxRC);
	xuan(main6title,main6BoxRC); 
	//按钮选项控制轮播图
	for(var i=0;i<main6dian.length;i++){
		main6dian[i].index=i;
		main6dian[i].onmouseover=function(){
			if(now==this.index||!flag){return;}
			flag=false;
				for(var k=0;k<imgs6B.length;k++){
					main6dian[k].style.backgroundColor='';
				}
			if(this.index>now){
				imgs6B[this.index].style.left=0;
				animate(imgs6B[now],{left:-imgs6W*2},300)
			}
			if(this.index<now){
				 imgs6B[this.index].style.left=-imgs6W*2+'px';
				animate(imgs6B[now],{left:0},300)
			}
			animate(imgs6B[this.index],{left:-imgs6W},300,function(){
					flag=true;
				})
			now=next=this.index;
		}
	}
	

	//六楼结束

	//七楼选项卡
	var main7titleR=$('.main3-titleR1',$('.main7-titleR')[0]);
	var main7BoxR=$('.main6BoxRC',$('.main7BoxR')[0]);
	// console.log(main7BoxR);
	xuan(main7titleR,main7BoxR); 
	//七楼轮播
	var imgs7B=$('div',$('.main7BoxRC2-1')[0]);//取出每个图片
	var imgs7=$('img',$('.main7BoxRC2-11')[0])[0];//获取每个图片
	var imgs7W=parseInt(getStyle(imgs7,'width'));//获取图片宽度
	var main7celan=$('.main7celan')[0];
	var main7celanL=$('.main7celanL')[0];
	var main7celanR=$('.main7celanR')[0];
	var main7BoxRC2=$('.main7BoxRC2')[0];
	var now7=0;
	var next7=0;
	var flag7=true;
	imgs7B[0].style.left=-imgs7W+'px';
	var t7=setInterval(Srl7,1500);
	function Srl7(){
		if(!flag7){return;}
		flag7=false;
		mov7(imgs7,imgs7W,imgs7B);
		function mov7(imgs,imgsW,imgsB){
			next7++;
		if(next7>imgsB.length-1){
			next7=0;
		}
		imgsB[next7].style.left=0;
		animate(imgsB[now7],{left:-imgsW*2},300);
		animate(imgsB[next7],{left:-imgsW},300,function(){
			flag7=true;
		});
		now7=next7;
		}
		
	}
	main7BoxRC2.onmouseover=function(){
		clearInterval(t7);
		main7celan.style.display='block';
	}
	main7BoxRC2.onmouseout=function(){
		t7=setInterval(Srl7,1000);
		main7celan.style.display='';
	}
	main7celanR.onclick=function(){
		Srl7();
	}
	
	main7celanL.onclick=function(){
		if(!flag7){return;}
		flag7=false;
		next7--;
		if(next7<0){
			next7=imgs7B.length-1;
		} 
		
		
		imgs7B[next7].style.left=-imgs7W*2+'px';
		animate(imgs7B[now7],{left:0},300);
		animate(imgs7B[next7],{left:-imgs7W},300,function(){
			flag7=true;
		});
		now7=next7;

	}
	//八楼选项卡
	var main8titleR=$('.main3-titleR1',$('.main8-titleR')[0]);
	var main8BoxR=$('.main6BoxRC',$('.main8BoxR')[0]);
	// console.log(main7BoxR);
	xuan(main8titleR,main8BoxR); 

	//八楼轮播
	var imgs8B=$('div',$('.main8BoxRC2-1')[0]);//取出每个图片
	var imgs8=$('img',$('.main8BoxRC2-11')[0])[0];//获取每个图片
	var imgs8W=parseInt(getStyle(imgs8,'width'));//获取图片宽度
	var main8celan=$('.main8celan')[0];
	var main8celanL=$('.main8celanL')[0];
	var main8celanR=$('.main8celanR')[0];
	var main8BoxRC2=$('.main8BoxRC2')[0];
	var now8=0;
	var next8=0;
	var flag8=true;
	imgs8B[0].style.left=-imgs8W+'px';
	var t8=setInterval(Srl8,1500);
	function Srl8(){
		if(!flag8){return;}
		flag8=false;
		mov8(imgs8,imgs8W,imgs8B);
		function mov8(imgs,imgsW,imgsB){
			next8++;
		if(next8>imgsB.length-1){
			next8=0;
		}
		imgsB[next8].style.left=0;
		animate(imgsB[now8],{left:-imgsW*2},300);
		animate(imgsB[next8],{left:-imgsW},300,function(){
			flag8=true;
		});
		now8=next8;
		}
		
	}
	//八楼选项卡
	var main9titleR=$('.main3-titleR1',$('.main9-titleR')[0]);
	var main9BoxR=$('.main6BoxRC',$('.main9BoxR')[0]);
	// console.log(main7BoxR);
	xuan(main9titleR,main9BoxR); 

	//八楼轮播
	var imgs9B=$('div',$('.main9BoxRC2-1')[0]);//取出每个图片
	var imgs9=$('img',$('.main9BoxRC2-11')[0])[0];//获取每个图片
	var imgs9W=parseInt(getStyle(imgs9,'width'));//获取图片宽度
	var main9celan=$('.main9celan')[0];
	var main9celanL=$('.main9celanL')[0];
	var main9celanR=$('.main9celanR')[0];
	var main9BoxRC2=$('.main9BoxRC2')[0];
	var now9=0;
	var next9=0;
	var flag9=true;
	imgs9B[0].style.left=-imgs9W+'px';
	var t9=setInterval(Srl9,1500);
	function Srl9(){
		if(!flag9){return;}
		flag9=false;
		mov9(imgs9,imgs9W,imgs9B);
		function mov9(imgs,imgsW,imgsB){
			next9++;
		if(next9>imgsB.length-1){
			next9=0;
		}
		imgsB[next9].style.left=0;
		animate(imgsB[now9],{left:-imgsW*2},300);
		animate(imgsB[next9],{left:-imgsW},300,function(){
			flag9=true;
		});
		now9=next9;
		}
		
	}
	//十楼选项卡
	var main10BoxRC=$('.main10BoxRC');
	var main10titleR=$('.main3-titleR1',$('.main10-titleR')[0]);
	var main10BoxRC21=$('div',$('.main10BoxRC2-1')[0]);
	console.log(main10BoxRC21)
	var imgs10=$('img',$('.main10BoxRC2-1')[0])[0];
	var main10W=parseInt(getStyle(imgs10,'width'));
	var main10dian=$('div',$('.main10BoxRC2-2')[0]);
	var main10BoxRC2=$('.main10BoxRC2')[0];
	var main10BoxRC23=$('.main10BoxRC2-3')[0];
	var main10L=$('.main10L')[0];
	var main10R=$('.main10R')[0];
	xuan(main10titleR,main10BoxRC);  
	//十楼轮播
	  main10BoxRC21[0].style.left=0;
	  var now10=0;
	  var next10=0;
	  var flag10=true;
	 var t10=setInterval(mov10,1000)  
	 function mov10(){
	 	if(!flag10){return;}
	 	flag10=false;
	  next10++;
	  if(next10>main10BoxRC21.length-1){
	  	next10=0;
	  }
	  main10dian[now10].className='';
	  main10dian[next10].className='hot10';
	  main10BoxRC21[next10].style.left=main10W+'px';
	  animate(main10BoxRC21[now10],{left:-main10W},300);
	  animate(main10BoxRC21[next10],{left:0},300,function(){
	  					flag10=true;
	  });
	  now10=next10;
	  }
	  main10BoxRC2.onmouseover=function(){
	  	clearInterval(t10);
	  	main10BoxRC23.style.display='block';
	  }
	  main10BoxRC2.onmouseout=function(){
	  	t10=setInterval(mov10,1000)  ;
	  	main10BoxRC23.style.display='';
	  }
	  main10R.onclick=function(){
	  	mov10();
	  }
	  main10L.onclick=function(){
	  	if(!flag10){return;}
	  	flag10=false;
	  	next10--;
	  	if(next10<0){
	  		next10=main10BoxRC21.length-1;
	  	}
	  	 main10dian[now10].className='';
	  	main10dian[next10].className='hot10';
	  	main10BoxRC21[next10].style.left=-main10W+'px';
	  	animate(main10BoxRC21[now10],{left:main10W},300);
	  	animate(main10BoxRC21[next10],{left:0},300,function(){
	  		flag10=true;
	  	});
	  		now10=next10;
	  }
	  for(var i=0;i<main10dian.length;i++){
	  	main10dian[i].index=i;
	  	main10dian[i].onclick=function(){
	  		if(!flag10){return;}
	  		flag10=false;
	  		if(this.index>now10){
	  			main10BoxRC21[this.index].style.left=main10W+'px';
	  			animate(main10BoxRC21[now10],{left:-main10W},300);
	  		}

	  		if(this.index<now10){
	  			main10BoxRC21[this.index].style.left=-main10W+'px';
	  			animate(main10BoxRC21[now10],{left:main10W},300);
	  		}
	  		 main10dian[now10].className='';
	 		 main10dian[this.index].className='hot10';
	  		animate(main10BoxRC21[this.index],{left:0},300,function(){
	  			flag10=true;
	  		});
	  		now10=next10=this.index;
	  	}
	  }
	//楼层跳转
	var LC1=$('.LC1');
	var LCmain=$('.LCmain');
	var LC11=$('.LC1-1');
	var LC12=$('.LC1-2');
	var LCbox=$('.LCbox')[0];
	var arr=[];
	 console.log(LCbox);
	for(var i=0;i<LC1.length;i++){
		arr.push(LCmain[i].offsetTop);
	}
	for(var j=0;j<LC1.length;j++){
		LC1[j].index=j;
		LC1[j].onclick=function(){
			animate(document.body,{scrollTop:arr[this.index]},300);
			animate(document.documentElement,{scrollTop:arr[this.index]},300);

		}
	}
	window.onscroll=function(){
		var doc=document.body.scrollTop?document.body:document.documentElement;
		if(doc.scrollTop>=arr[0]&&doc.scrollTop<=arr[LC1.length-1]){
			LCbox.style.display='block';
		}else{
			LCbox.style.display='none';
		}
		for(var i=0;i<LC1.length;i++){			
			if(doc.scrollTop>=arr[i]){

				for(var j=0;j<LC1.length;j++){

					LC11[j].style.display='block';
					LC12[j].style.display='none';
					// alert(3)
				}
					LC11[i].style.display='none';
					LC12[i].style.display='block';
					LC12[i].style.backgroundColor='#c81623';
					LC12[i].style.color='#fff';
			}
		}
	}
	// for(var i=0;i<LC1.length;i++){
	// 	LC12[i].onmouseover=function(){
	// 		LC12[i].style.cssText="color:#fff;
	// 		background:#c81623;"
	// 	}
	//获取返回顶部
	var Banniuup=$('.Banniuup')[0];
	var Banniudown=$('.Banniudown')[0];
	Banniuup.onmouseover=function(){
		animate(Banniudown,{right:30},300);
	}
	Banniuup.onmouseout=function(){
		setTimeout(function(){
			animate(Banniudown,{right:-90},300);
		 },500)
	}
	Banniudown.onmouseover=function(){
		Banniuup.onmouseout='null';
		animate(Banniudown,{right:30},300);
	}
	Banniudown.onmouseout=function(){
		animate(Banniudown,{right:-90},300);		 
	}
	Banniudown.onclick=function(){
		var doc=document.body.scrollTop?document.body:document.documentElement;
		animate(doc,{scrollTop:0},100);
	}
	//下拉选项
	var names=$('.name');
	console.log(names)
	var G_xiala=$('.G_xiala');
	console.log(names)
	console.log(G_xiala)
	for(var i=0;i<names.length;i++){
		movs(i);
	}
	function movs(i){

		names[i].onmouseover=function(){
		G_xiala[i].style.display='block';
		names[i].style.cssText='border:1px solid #ccc;border-bottom:1px solid #fff;background:#fff'
	}
	
	var t;
	names[i].onmouseout=function(){
		t=setTimeout(function(){
			G_xiala[i].style.display='none';
		},100);
		names[i].style.background='';
		names[i].style.border='';
	G_xiala[i].onmouseover=function(){
		clearTimeout(t);
		G_xiala[i].style.display='block';
		names[i].style.cssText='border:1px solid #ccc;border-bottom:1px solid #fff;background:#fff;'
	}
	G_xiala[i].onmouseout=function(){
		G_xiala[i].style.display='none';
		names[i].style.background='';
		names[i].style.border='';
	}
	}	
}	
//广告
var close=$('.close')[0];
var advert=$('.advert')[0];
setTimeout(function(){
	advert.style.display='block';
},1000)
close.onclick=function(){
	advert.style.display='';
}
	
//banner_bottom
var main2RB=$('.main2R')[0];
var main2R1=$('.main2R-1');
var main2R1W=parseInt(getStyle(main2R1[0],'width'))
var next12=0;
var now12=0;
main2R1[0].style.left=0;
setInterval(function(){
	next12++;
	if(next12>main2R1.length){
		next12=0;
	}
	main2R1[next12].style.left=-main2R1W+'px';
	animate(main2R1[now12],{left:main2R1W},1000);
	animate(main2R1[next12],{left:0},1000);
	now12=next12;
},2000)
}
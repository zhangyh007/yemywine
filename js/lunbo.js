	/*<a href="" style="display:none"><img src="" alt="" /></a>
	<a href="" style="display:none"><img src="" alt="" /></a>
	<a href="" style="display:none"><img src="" alt="" /></a>
	<a href="" style="display:none"><img src="" alt="" /></a>
	<a href="" style="display:none"><img src="" alt="" /></a>
	<ul class="nav-num">
		<li style="display:none">1</li>
		<li style="display:none">2</li>
		<li style="display:none">3</li>
		<li style="display:none">4</li>
		<li style="display:none">5</li>
		<li style="display:none">6</li>
	</ul>*/
	
$(function(){
	//lunbo1 轮播1
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/yesmywine/json/lunbo.json",
		async:true,
		success: function(res){
			var html1="";
			var html2="";
			for(var i in res.lunbo1){
				html1+=
				`<a href="" style="display:${res.lunbo1[i].show_img}">
					<img src="img/${res.lunbo1[i].img}" alt="" /></a>`
			}	
			for(var j in res.lunbo1){	
				html2+=`<li style="display:${res.lunbo1[j].show_img}">${res.lunbo1[j].num}</li>`
					
			}	
			$(".lunbo_img:eq(0)").html(html1);
			$(".lunbo_num:eq(0)").html(html2);
			
			var w=$(".lunbo:eq(0)").width();
			var w2=$(".lunbo_num:eq(0)").width();
			/*console.log(w)
			console.log(w2)*/
			$(".lunbo_num:eq(0)").css("left",(w-w2)/2).find("li").eq(0).css("background","#7e0001");
			
			var timer1=null;
			var index=0;
			var flag=true;
			timer1=setInterval(autoPlay,2000);
			function autoPlay(){
				if(index==2){
					flag=false;
				}
				if(index==0){
					flag=true;
				}
				if(flag){
					index++;
				}else{
					index--;
				}
				$(".lunbo_num:eq(0)>li").css("background","#86685e");
				$(".lunbo_num:eq(0)>li").eq(index).css("background","#7e0001")
				$(".lunbo_img:eq(0)").stop().animate({"left":-760*index},1000)
			}
			$(".lunbo_num:eq(0)>li").mouseenter(function(){
				clearInterval(timer1);
				index=$(this).index()-1;
				autoPlay();
			}).mouseleave(function(){
				timer1=setInterval(autoPlay,2000);
			})
		}
	});
	
	//lunbo2 轮播2
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/yesmywine/json/lunbo.json",
		async:true,
		success: function(res){
			var html1="";
			var html2="";
			for(var i in res.lunbo2){
				html1+=
				`<a href="" style="display:${res.lunbo2[i].show_img}">
					<img src="img/${res.lunbo2[i].img}" alt="" /></a>`
			}	
			for(var j in res.lunbo2){	
				html2+=`<li style="display:${res.lunbo2[j].show_img}">${res.lunbo2[j].num}</li>`
					
			}	
			$(".lunbo_img:eq(1)").html(html1);
			$(".lunbo_num:eq(1)").html(html2);
			
			var w=$(".lunbo:eq(1)").width();
			var w2=$(".lunbo_num:eq(1)").width();
			/*console.log(w)
			console.log(w2)*/
			$(".lunbo_num:eq(1)").css("left",(w-w2)/2).find("li").eq(0).css("background","#7e0001");
			
			var timer1=null;
			var index=0;
			var flag=true;
			timer1=setInterval(autoPlay2,2000);
			function autoPlay2(){
				if(index==4){
					flag=false;
				}
				if(index==0){
					flag=true;
				}
				if(flag){
					index++;
				}else{
					index--;
				}
				$(".lunbo_num:eq(1)>li").css("background","#86685e");
				$(".lunbo_num:eq(1)>li").eq(index).css("background","#7e0001")
				$(".lunbo_img:eq(1)").stop().animate({"left":-760*index},1000)
			}
			$(".lunbo_num:eq(1)>li").mouseenter(function(){
				clearInterval(timer1);
				index=$(this).index()-1;
				autoPlay2();
			}).mouseleave(function(){
				timer1=setInterval(autoPlay2,2000);
			})
		}
	});
	
	//lunbo3 轮播3
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/yesmywine/json/lunbo.json",
		async:true,
		success: function(res){
			var html1="";
			var html2="";
			for(var i in res.lunbo3){
				html1+=
				`<a href="" style="display:${res.lunbo3[i].show_img}">
					<img src="img/${res.lunbo3[i].img}" alt="" /></a>`
			}	
			for(var j in res.lunbo3){	
				html2+=`<li style="display:${res.lunbo3[j].show_img}">${res.lunbo3[j].num}</li>`
					
			}	
			$(".lunbo_img:eq(2)").html(html1);
			$(".lunbo_num:eq(2)").html(html2);
			
			var w=$(".lunbo:eq(2)").width();
			var w2=$(".lunbo_num:eq(2)").width();
			/*console.log(w)
			console.log(w2)*/
			$(".lunbo_num:eq(2)").css("left",(w-w2)/2).find("li").eq(0).css("background","#7e0001");
			
			var timer1=null;
			var index=0;
			var flag=true;
			timer1=setInterval(autoPlay3,2000);
			function autoPlay3(){
				if(index==3){
					flag=false;
				}
				if(index==0){
					flag=true;
				}
				if(flag){
					index++;
				}else{
					index--;
				}
				$(".lunbo_num:eq(2)>li").css("background","#86685e");
				$(".lunbo_num:eq(2)>li").eq(index).css("background","#7e0001")
				$(".lunbo_img:eq(2)").stop().animate({"left":-760*index},1000)
			}
			$(".lunbo_num:eq(2)>li").mouseenter(function(){
				clearInterval(timer1);
				index=$(this).index()-1;
				autoPlay3();
			}).mouseleave(function(){
				timer1=setInterval(autoPlay3,2000);
			})
		}
	});
})

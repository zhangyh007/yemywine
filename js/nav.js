//window.onload=function(){
	
	//nav的轮播
	/*<li><img src="img/20170413145101762.jpg"/></li>
		<li><img src="img/20170718110731765.jpg"/></li>
		<li><img src="img/20170724113837644.jpg"/></li>
		<li><img src="img/20170815151520307.jpg"/></li>
		<li><img src="img/20170818201004851.jpg"/></li>
		<li><img src="img/20170824174422590.jpg"/></li>
		<li><img src="img/20170901163524629.jpg"/></li>
		<li><img src="img/20170902001003233.jpg"/></li>
		<li><img src="img/qingcang.jpg"/></li>
	<ul class="nav-num">
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
		<li>7</li>
		<li>8</li>
		<li>9</li>
	</ul>*/
	$.ajax({
		type: "get" ,
		url: "json/nav.json",
		success: function(res){
			
			var str="";
			var str2="";
			
			console.log(res[0].src);
			for(var i in res){
				str+=`<a href=""><img src="img/${res[i].src}"/></a>`;
			}
			for(var j in res){
				str2+=`<li>${res[j].index}</li>`;
			}
			//console.log(str);
			$(".nav-num").html(str2);
			$(".nav-content").html(str);
			
			//nav轮播
			$(".nav-content a").each(function(){//定位
				$(this).css({"left":-(1920-$(window).outerWidth())/2})
				//console.log($(window).outerWidth())
			})
			var oLeft=$(".nav-num").width()/2;
			var bLeft=$("body").outerWidth()/2;
			//console.log(oLeft);
			//console.log(bLeft);
			
			$(".nav-num").css({"left":(bLeft-oLeft)})
			
			var timer=null;
			var index=0;
			$(".nav-num li").eq(index).addClass("active").siblings().removeClass("active");
			timer=setInterval(autoPlay,3000);
			function autoPlay(){
				index++;
				if(index==9){
					index=0;
				}
				$(".nav-num li").eq(index).addClass("active").siblings().removeClass("active");
				$(".nav-content a").eq(index).stop().animate({"opacity":1},800).siblings().stop().animate({"opacity":0},800)
			}
			$(".nav-num li").mouseenter(function(){
				clearInterval(timer);
				index=$(this).index()-1;
				autoPlay();
			}).mouseleave(function(){
				timer=setInterval(autoPlay,3000);
				
			})
			
		}
	})
//}

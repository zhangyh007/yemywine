window.onload=function(){
	

	$(".select_menu1_select1,.select_menu2_select,.select_menu3_select,.select_menu4_select,.select_menu5_select,.select_menu6_select").find("a").mouseenter(function(){
		color=$(this).css("color");
		$(this).css("color", "#d3161b")
		
	}).mouseleave(function(){
		$(this).css("color",color)
	})
	
	//第一子菜单
	$("#select_menu1").mouseenter(function(e){
		var e=event||e;
		e.stopPropagation();
		$(".select_menu1_select1").css({"display":"block","z-index":11}).stop().animate({"left":200,"opacity":1},500);
		
	}).mouseleave(function(){
		$(".select_menu1_select1").stop().animate({"opacity":0},10,function(){
			$(this).css({"left":170,"display":"none"});
			
		})
	})
	//第二子菜单
	$("#select_menu2").mouseenter(function(){
		$(".select_menu2_select").css({"display":"block","z-index":11}).stop().animate({"left":200,"opacity":1},500);
		
	}).mouseleave(function(){
		$(".select_menu2_select").stop().animate({"opacity":0},10,function(){
			$(this).css({"left":170,"display":"none"});
			
		})
	})
	//第三子菜单
	$("#select_menu3").mouseenter(function(){
		$(".select_menu3_select").css({"display":"block","z-index":11}).stop().animate({"left":200,"opacity":1},500);
		
	}).mouseleave(function(){
		$(".select_menu3_select").stop().animate({"opacity":0},10,function(){
			$(this).css({"left":170,"display":"none"});
			
		})
	})
	//第四子菜单
	$("#select_menu4").mouseenter(function(){
		$(".select_menu4_select").css({"display":"block","z-index":11}).stop().animate({"left":200,"opacity":1},500);
		
	}).mouseleave(function(){
		$(".select_menu4_select").stop().animate({"opacity":0},10,function(){
			$(this).css({"left":170,"display":"none"});
			
		})
	})
	//第五子菜单
	$("#select_menu5").mouseenter(function(){
		$(".select_menu5_select").css({"display":"block","z-index":11}).stop().animate({"left":200,"opacity":1},500);
		
	}).mouseleave(function(){
		$(".select_menu5_select").stop().animate({"opacity":0},10,function(){
			$(this).css({"left":170,"display":"none"});
			
		})
	})
	//第六子菜单
	$("#select_menu6").mouseenter(function(){
		$(".select_menu6_select").css({"display":"block","z-index":11}).stop().animate({"left":200,"opacity":1},500);
		
	}).mouseleave(function(){
		$(".select_menu6_select").stop().animate({"opacity":0},10,function(){
			$(this).css({"left":170,"display":"none"});
			
		})
	})
}
$(function(){
	//footer友情链接的下拉菜单
	var flag=true;
	var str=`
	<div class="friendly-link" >
				
						<a href="#">友情链接：</a>
						<a href="#">商酒资讯网</a>
						<a href="#">959品牌招商网</a>
						<a href="#">贡酒电子商务网</a>
						<a href="#">123美食网</a>
						<a href="#">重庆婚姻</a>
						<a href="#">酒招商</a>
						<a href="#">烧酒网</a>
						<a href="#">57团购网</a>
						<a href="#">中国糖酒网</a>
						<a href="#">中国品牌网</a>
						<a href="#">搜狐焦点烟台站</a>
						<a href="#">秒客网</a>
						
						<p class="hide-link" >
							<a href="#">中国糖酒门</a>
							<a href="#">美酒招商网</a>
							<a href="#">白酒招商</a>
						</p>
			</div>
			<span id="arrow-footer"></span>`
	$(".footer-bottom").prepend(str);
	$("#arrow-footer").click(function(){
		
		if(flag){
			$(".hide-link").css("display","block");
			$(this).css("background-position","-160px -184px");
			$(".friendly-link").css("border-bottom","1px dashed #999")
			flag=false;
		}else{
			$(".hide-link").css("display","none");
			$(this).css("background-position","-160px -175px");
			$(".friendly-link").css("border",0)
			flag=true;
		}
	})
	
	
	
})

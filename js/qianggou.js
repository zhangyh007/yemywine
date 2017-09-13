/*<div class="qigou">
	<div class="img">
		<img src="img/qiagou/1.jpg"/>
	</div>
	
	<div class="xiangxi">
		<p class="main_top_name">
			修道士城堡干红葡萄酒<br />
			2013（中级庄）
		</p>
		<p class="main_top_price">
			￥99.0
		</p>
	</div>
	<p class="soldNum">
		售出&emsp;316
	</p>
</div>*/

	
$(function(){

	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/yesmywine/json/qianggou.json",
		success: function(res){
			var html="";
			//alert(0)
			for(var i in res.qianggou.list){
				html+=
				`<div class="qigou">
					
					<p class="qiang" style="display: ${res.qianggou.list[i].qiang};"></p>
					<div class="img">
						<a href="http://127.0.0.1/yesmywine/html/goods_all.html?pimg=${res.qianggou.list[i].img}&price=${res.qianggou.list[i].price}&soldNum=${res.qianggou.list[i].soldNum}&pname=${res.qianggou.list[i].name}"  target="_blank">
						<img src="img/qiagou/${res.qianggou.list[i].img}"/>
						</a>
					</div>
					
					<div class="xiangxi">
						<a href="#">
							<p class="main_top_name">
								${res.qianggou.list[i].name}
							</p></a>
						<p class="main_top_price">
							¥${res.qianggou.list[i].price}
						</p>
					</div>
					<p class="soldNum">
						售出&emsp;${res.qianggou.list[i].soldNum}
					</p>
				</div>`
			}
			
			$(".qigou_wrap").html(html);
			
			
			$("#main_top_r li").mouseenter(function(){
				var index=$(this).index();
				$(this).find("a").css({"color":"white","background":"#d3161b"}).end().siblings().find("a").css({"color":"#73584a","background":"#ffe8e8"});
				
				$(".main_top_r_title").css({"color":"#73584a"});
				$(".main_top_r_title").eq(index).css("color","white");
				
				$(".qigou_wrap").stop().animate({"top":-index*312},300)
				
			})
		},
		error : function(){
			console.log(111)
		}
	});
	
	
	//miao秒杀
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/yesmywine/json/qianggou.json",
		success : function(res){
			var html="";
			for(var i in res.miao.list){
				html+=
					`<dl>
						<img src="img/miao.png" alt="" class="miao_pic"/>
						<dt>
							<a href="#">
								<img src="img/miao/${res.miao.list[i].img}" alt="" />
							</a>
						</dt>
						<dd>
							<a href="#">${res.miao.list[i].name}</a>
							<p>${res.miao.list[i].indr}</p>
							<p><span class="miao_j">￥<strong class="mic_price">${res.miao.list[i].price}</strong></span>
								<span class="yujia">${res.miao.list[i].pre_price}</span>
							</p>
						</dd>
					</dl>`
			}
			
			$(".prolist").html(html);
			//console.log(11)
		}
	});
	
	
	//专题栏
		$.ajax({
			type:"get",
			url:"http://127.0.0.1/yesmywine/json/qianggou.json",
			success: function(res){
				var html1="";
				var html2="";
				var html3="";
				var str2="";
				var str3="";
				var str4="";
				var one=res.section_l_one;
				var two=res.section_l_one2;
				var two2=res.section_l_two;
				var three=res.section_l_three;
				var three2=res.section_l_three2;
				
				var r=res.section_r;
				
				/*专题一*/
				for(var i in one.list){
					html1+=		
						`<div class="qigou">
							<p class="qiang" style="display: ${one.list[i].qiang};"></p>
							<div class="img">
								<a href="http://127.0.0.1/yesmywine/html/goods_all.html?pimg=${one.list[i].img}&price=${one.list[i].price}&soldNum=${one.list[i].soldNum}&pname=${one.list[i].name}"  target="_blank">
								<img src="img/qiagou/${one.list[i].img}"/>
								</a>
							</div>
							
							<div class="xiangxi">
								<a href="#">
									<p class="main_top_name">
										${one.list[i].name}
									</p></a>
								<p class="main_top_price">
									￥<strong>${one.list[i].price}</strong>
								</p>
							</div>
							<p class="soldNum">
								<span class="soldNum_l">售出：${one.list[i].num}</span>
								<span class="soldNum_r">好评：${one.list[i].soldNum}</span>
								
							</p>
						</div>`
				}
				/*专题一/2*/			
				for(var j in two.list){
					html2+=
						`<div class="qigou">
							<p class="qiang" style="display: ${two.list[j].qiang};"></p>
							<div class="img">
								<a href="http://127.0.0.1/yesmywine/html/goods_all.html?pimg=${two.list[j].img}&price=${two.list[j].price}&soldNum=${two.list[j].soldNum}&pname=${two.list[j].name}"  target="_blank">
								<img src="img/qiagou/${two.list[j].img}"/>
								</a>
							</div>
							
							<div class="xiangxi">
								<a href="#">
									<p class="main_top_name">
										${two.list[j].name}
									</p></a>
								<p class="main_top_price">
									￥<strong>${two.list[j].price}</strong>
								</p>
							</div>
							<p class="soldNum">
								<span class="soldNum_l">售出：${two.list[j].num}</span>
								<span class="soldNum_r">好评：${two.list[j].soldNum}</span>
								
							</p>
						</div>`
									
				}	
				/*专题二*/
				for(var m in two.list){
					str2+=		
						`<div class="qigou">
							<p class="qiang" style="display: ${two2.list[m].qiang};"></p>
							<div class="img">
								<a href="http://127.0.0.1/yesmywine/html/goods_all.html?pimg=${two2.list[m].img}&price=${two2.list[m].price}&soldNum=${two2.list[m].soldNum}&pname=${two2.list[m].name}"  target="_blank">
								<img src="img/qiagou/${two2.list[m].img}"/>
								</a>
							</div>
							
							<div class="xiangxi">
								<a href="#">
									<p class="main_top_name">
										${two2.list[m].name}
									</p></a>
								<p class="main_top_price">
									￥<strong>${two2.list[m].price}</strong>
								</p>
							</div>
							<p class="soldNum">
								<span class="soldNum_l">售出：${two2.list[m].num}</span>
								<span class="soldNum_r">好评：${two2.list[m].soldNum}</span>
								
							</p>
						</div>`
				}
				
				/*专题3-1*/
				for(var n in three.list){
					str3+=		
						`<div class="qigou">
							<p class="qiang" style="display: ${three.list[n].qiang};"></p>
							<div class="img">
								<a href="http://127.0.0.1/yesmywine/html/goods_all.html?pimg=${three.list[n].img}&price=${three.list[n].price}&soldNum=${three.list[n].soldNum}&pname=${three.list[n].name}"  target="_blank">
								<img src="img/qiagou/${three.list[n].img}"/>
								</a>
							</div>
							
							<div class="xiangxi">
								<a href="#">
									<p class="main_top_name">
										${three.list[n].name}
									</p></a>
								<p class="main_top_price">
									￥<strong>${three.list[n].price}</strong>
								</p>
							</div>
							<p class="soldNum">
								<span class="soldNum_l">售出：${three.list[n].num}</span>
								<span class="soldNum_r">好评：${three.list[n].soldNum}</span>
								
							</p>
						</div>`
				}
				/*专题3-2*/
				for(var p in three2.list){
					str4+=		
						`<div class="qigou">
							<p class="qiang" style="display: ${three2.list[p].qiang};"></p>
							<div class="img">
								<a href="http://127.0.0.1/yesmywine/html/goods_all.html?pimg=${three2.list[p].img}&price=${three2.list[p].price}&soldNum=${three2.list[p].soldNum}&pname=${three2.list[p].name}"  target="_blank">
								<img src="img/qiagou/${three2.list[p].img}"/>
								</a>
							</div>
							
							<div class="xiangxi">
								<a href="#">
									<p class="main_top_name">
										${three2.list[p].name}
									</p></a>
								<p class="main_top_price">
									￥<strong>${three2.list[p].price}</strong>
								</p>
							</div>
							<p class="soldNum">
								<span class="soldNum_l">售出：${three2.list[p].num}</span>
								<span class="soldNum_r">好评：${three2.list[p].soldNum}</span>
								
							</p>
						</div>`
				}
				
				for(var k in r.list){
					html3+=			
					`<dl class="${r.list[k].class}">
						<strong class="num_order">${r.list[k].num}</strong>
						<dt style="display:${r.list[k].display}"}">
							<a href="#">
								<img src="img/small-p/${r.list[k].img}"/>
							</a>
						</dt>
						<dd>
							<a href="" class="onchange">${r.list[k].name}</a>
							<p class="num">售出<span>${r.list[k].soldNum}</span></p>
							<p class="price">￥<span>${r.list[k].price}</span></p>
						</dd>
					</dl>`
				}
				
				$(".section_l_content").eq(0).html(html1);
				$(".section_l_content").eq(1).html(html2);
				$(".section_l_content").eq(2).html(str2);
				$(".section_l_content").eq(3).html(str3);
				$(".section_l_content").eq(4).html(str4);
				$(".section_r_con").html(html3);
				
				
				$(".section_r_con:eq(0)>dl:not(:eq(0),:eq(1))").mouseenter(function(){
					$(".section_r_con:eq(0)>dl:not(:eq(0),:eq(1))").addClass("change").find("dt").hide();
					$(this).removeClass("change").find("dt").show();
				})
				
				$(".section_r_con:eq(1)>dl:eq(2)").addClass("change").find("dt").hide();
				$(".section_r_con:eq(1)>dl:not(:eq(0))").mouseenter(function(){
					$(".section_r_con:eq(1)>dl:not(:eq(0))").addClass("change").find("dt").hide();
					$(this).removeClass("change").find("dt").show();
				})
				
				$(".section_r_con:eq(2)>dl:not(:eq(0),:eq(1))").mouseenter(function(){
					$(".section_r_con:eq(2)>dl:not(:eq(0),:eq(1))").addClass("change").find("dt").hide();
					$(this).removeClass("change").find("dt").show();
				})
		},
		error: function(){
			console.log(222)
		}
	});
	
	
});

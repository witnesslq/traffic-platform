(function($){
	$.fn.extend({
		Slider:function(options){
			var defaults = {
				idx:0,
				content:'.wrap-content',
				delay:4000,
				handler:'hover',
				data:[{
					src:'img/img01.png',
					text:'2017年全国勘察设计注册工程师考试工作总结座谈会在京召开1'
				},{
					src:'img/img02.png',
					text:'2017年全国勘察设计注册工程师考试工作总结座谈会在京召开2'
				},{
					src:'img/img03.png',
					text:'2017年全国勘察设计注册工程师考试工作总结座谈会在京召开3'
				},{
					src:'img/img04.png',
					text:'2017年全国勘察设计注册工程师考试工作总结座谈会在京召开4'
				},{
					src:'img/img05.png',
					text:'2017年全国勘察设计注册工程师考试工作总结座谈会在京召开5'
				}]
			}
			var options = $.extend(defaults,options);
			return this.each(function(){
				var o = options;
				var timer = null;
				var _this = $(this);
				var arr = [];
				var list = ''
				var oul = document.createElement('ul');
				for(var i=0;i<o.data.length;i++){
					list += '<li><a><img src='+o.data[i].src+'></a></li>'
				}
				oul.className = 'wrap-list'
				oul.innerHTML = list
				_this.append(oul)

				var item = $('.wrap-list li')
				init(o.idx);
				timer = setInterval(move,o.delay)
				item.each(function(index,el){
					$(el).hover(function(){
						o.idx = $(el).index();
						init(o.idx)
					})
				})
				_this.mouseover(function(){
					clearInterval(timer)
				}).mouseout(function(){
					clearInterval(timer)
					timer = setInterval(move,o.delay)
				})
				function init(idx){
					$(o.content).find('span').html(o.data[idx].text)
					$(o.content).find('img').attr('src',o.data[idx].src);
					$(o.content).find('a').show();
					$(o.content).find('a').attr('href',o.data[idx].link);
					item.eq(idx).find('a').addClass('active')
					item.eq(idx).siblings().find('a').removeClass('active')
				}
				function move(){
					o.idx = o.idx<o.data.length-1?o.idx+1:0
					init(o.idx)
				}
			})	
		}
	});
})(jQuery);
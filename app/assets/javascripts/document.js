$(document).ready(function(){
	$("#dropDownTable tr td").hover(
		function(){$(this).find("li").toggle();}
		//function(){$(this).find("li").css('display','table-row');},
		//function(){$(this).find("li").css('display','none');}
		);
	$("table.topTabs").tabs("div.topPanes > div");
	$(".slidetabs").tabs(".pictures > img", {
		effect: 'fade',
		rotate: true
	}).slideshow();
});

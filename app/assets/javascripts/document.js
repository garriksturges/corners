$(document).ready(function(){
	$("#dropDownTable tr td").hover(
		function(){$(this).find("li").toggle();}
		);
	$("table.topTabs").tabs("div.topPanes > div");
	$(".slidetabs").tabs(".pictures > img", {
		effect: 'fade',
		rotate: true
	}).slideshow();
});

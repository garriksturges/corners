$(document).ready(function(){
	$("#dropDownTable tr td").hover(
		function(){$(this).find("table").toggle();}
		//function(){$(this).find("li").css('display','table-row');},
		//function(){$(this).find("li").css('display','none');}
		);
		$(".topNav").hover(
			function(){$(this).find(".navDropDown table").toggle();}
			);
	$("table.topTabs").tabs("div.topPanes > div");
	$(".slidetabs").tabs(".pictures > img", {
		effect: 'fade',
		rotate: true
	}).slideshow();
});

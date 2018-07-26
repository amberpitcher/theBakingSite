$(document).ready(function(){
	$(".hamburger").click(function(){

		if (!$(".hamburger").hasClass("open")) {		
			$(".hamburger").addClass("open");
			$("nav #menu").css("display", "flex");
		} else{
			$(".hamburger").removeClass("open");
			$("nav #menu").css("display", "none");
		}
	})

	$("nav #menu li a").click(function(){

		if($ (window).width() <= 900){
			$("nav #menu").css("display", "none");

			if (!$(".hamburger").hasClass("open")) {
				$(".hamburger").addClass("open");
			} else{
				$(".hamburger").removeClass("open");
			}
		}
	})

	$("#portfolio .portfolio-item").click(function(){
		$(this).find(".portfolio-item-hover").toggleClass("hover-opacity");
		$(".ico-pos-open").toggleClass("hover-display");
	})
})

$(window).resize(function(){
	if($ (window).width() > 900){
		$("nav #menu").css("display", "block");
	} 
	else if (($(".hamburger").hasClass("open"))){
		$("nav #menu").css("display", "none");
		$(".hamburger").removeClass("open");
	} else{
		$("nav #menu").css("display", "none");
	}
})
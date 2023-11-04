$(document).ready(function() {

	$('html').click(function() {
		window.open('/about', '_self');
	});
	
	$('.mottoDiv').click(function() {
		window.open('/about', '_self');
	});
	
	$('.iconDiv').click(function() {
		window.open('/about', '_self');
	});
	
	var nietzsche = [/*
			  "Where is the lightning to lick you with its tongue?", 
	         	  "You must have a little chaos within to give birth to a dancing star!",
	        	  "What is done for love is always done beyond good and evil",
	              	  "Pregnant with possibilities",
	              	 */
	              ];
	
/**
* Ominous legal clause: feel free to use but you must credit thoughtscript.io! Thanks!
*/
	
	var thoughtscriptMottos = ["Ideas in Praxis", 
	              "From Ideas to Praxis", 
	              "Please refresh your browsers...",
	              "Take a break already",
	              "To see the sapling in the seed...",
	              "Enjoy your stay",
	              "Float free",
	              "A good IDE is hard to find",
	              "Information overload? Time for a dose of M-E-T-A...",
	              "Hand-coded for your learning pleasure",
	              "Think you could do better?  (That's the point!)",
	              "Have you found... El Dorado?",
	              "Crass translation: excellent coding",
	              "Putting your brain to good use since 2015",
	              "Click and explore...",
	              "Unleash your creativity"
	              ];
	
	var unifiedMotto = nietzsche.concat(thoughtscriptMottos);
	var motto = unifiedMotto[Math.floor(Math.random()*unifiedMotto.length)];
	$(".mottoDiv").append("<p class=\"motto\"\">" + motto + "</p>");
	
/**
* Front page icon logic.
*/
	
	if (bowser.chrome == true) {
		$(".iconDiv").append("<!-- Begin @Author: Pawel Kuna : http://codepen.io/codecalm/ -->"
				+ "<div class=\"dots\"><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div>"
				+ "<div class=\"dot\"></div><div class=\"dot\"></div></div>"
				+ "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">"
				+ "<defs><filter id=\"goo\"><feGaussianBlur in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"12\" />"
				+ "<feColorMatrix in=\"blur\" mode=\"matrix\"	values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" />"
				+ "<!--<feBlend in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" />-->"
				+ "</filter></defs></svg><!-- End @Author: Pawel Kuna : http://codepen.io/codecalm/ -->")
		$(".cssDiv").append("<!-- Begin @Author: Pawel Kuna : http://codepen.io/codecalm/ -->"
				+ "<link type=\"text/css\" rel=\"stylesheet\" href=\"css/codepen/dots.css\" />"
				+ "<!-- End @Author: Pawel Kuna : http://codepen.io/codecalm/ -->");
	}
	
	if (bowser.msie==true) {
		$(".iconDiv").append("<!-- Begin @Author: Pawel Kuna : http://codepen.io/codecalm/ -->"
			+ "<!-- End @Author: Pawel Kuna : http://codepen.io/codecalm/ -->")
	}
	
	if (bowser.firefox==true) {
		$(".iconDiv").append("<!-- Begin @Author: Gregor Adams: http://codepen.io/pixelass/pen/NGNXMg -->"
				+ "<div class=\"view\"><div class=\"axis\"><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\">"
				+ "</div><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div></div><div class=\"axis\">"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div> <div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div></div><div class=\"axis\"><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div></div><div class=\"axis\"><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "</div><div class=\"axis\"><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div></div><div class=\"axis\">"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div><div class=\"ring\"></div>"
				+ "<div class=\"ring\"></div><div class=\"ring\"></div></div></div>"
				+"<!-- End @Author: Gregor Adams: http://codepen.io/pixelass/pen/NGNXMg -->")
		$(".cssDiv").append("<!-- Begin @Author: Gregor Adams: http://codepen.io/pixelass/pen/NGNXMg -->"
				+ "<link type=\"text/css\" rel=\"stylesheet\" href=\"css/codepen/blobbysphereanimation.css\" />"
				+ "<!-- End @Author: Gregor Adams: http://codepen.io/pixelass/pen/NGNXMg -->");
		$(".cssDiv").append("<link type=\"text/css\" rel=\"stylesheet\" href=\"css/pagespecefic/frontpage_override.css\" />");
	}

	if (bowser.safari==true) {
		$(".iconDiv").append("<!-- Begin @Author: Pawel Kuna: http://codepen.io/codecalm/pen/pjJMQB -->" 
			+ "<div class=\"dots\"><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div>"
			+ "<div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div>"
			+ "<div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div>"
			+ "</div><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"goo\">"
			+ "<feGaussianBlur in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"9\" />"
			+ "<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -7\" result=\"goo\" />"
			+ "<feBlend in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" /></filter></defs></svg>"
		    + "<!-- End @Author: Pawel Kuna: http://codepen.io/codecalm/pen/pjJMQB -->")
		$(".cssDiv").append("<!-- Begin @Author: Pawel Kuna: http://codepen.io/codecalm/pen/pjJMQB -->"
			+ "<link type=\"text/css\" rel=\"stylesheet\" href=\"css/codepen/reddots.css\" />"
			+ "<!-- End @Author: Pawel Kuna: http://codepen.io/codecalm/pen/pjJMQB -->")		
	}	
	
	if (bowser.ios==true) {
		$(".iconDiv").append("<!-- Begin @Author: Pawel Kuna: http://codepen.io/codecalm/pen/pjJMQB -->" 
			+ "<div class=\"dots\"><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div>"
			+ "<div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div>"
			+ "<div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div>"
			+ "</div><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"goo\">"
			+ "<feGaussianBlur in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"9\" />"
			+ "<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -7\" result=\"goo\" />"
			+ "<feBlend in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" /></filter></defs></svg>"
		    + "<!-- End @Author: Pawel Kuna: http://codepen.io/codecalm/pen/pjJMQB -->")
		$(".cssDiv").append("<!-- Begin @Author: Pawel Kuna: http://codepen.io/codecalm/pen/pjJMQB -->"
			+ "<link type=\"text/css\" rel=\"stylesheet\" href=\"css/codepen/reddotsios.css\" />"
			+ "<!-- End @Author: Pawel Kuna: http://codepen.io/codecalm/pen/pjJMQB -->")		
	}	
});

elixir.homeButton = {};
elixir.homeButton = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();
	function replaceFirstItemWithHomeIcon() {

		$elixir('#main-navigation>.inner>ul>li').first().attr('id', 'home-button');
		$elixir('#main-navigation>.inner>ul>li a').first().css({'text-indent' : '-2000px'});

	}
	
	$elixir(document).ready(function() {
		replaceFirstItemWithHomeIcon();
	});	
})(elixir.homeButton);


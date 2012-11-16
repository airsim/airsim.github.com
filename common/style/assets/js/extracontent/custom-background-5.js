elixir.customBackground = {};
elixir.customBackground = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();
	function customBackgroundImage() {
		$elixir('#header').addClass('ec_bkg_5');
		$elixir('#header').css({'background-color':'#fff'});
	}
	
	$elixir(document).ready(function() {
		customBackgroundImage();
	});	
})(elixir.customBackground);
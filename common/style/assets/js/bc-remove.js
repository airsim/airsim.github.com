elixir.bcRemover = {};
elixir.bcRemover = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function removeBreadcrumbOnSinglePage() {
		$elixir('#breadcrumb').remove();
	}
	
	$elixir(document).ready(function() {
		removeBreadcrumbOnSinglePage();
	});	
})(elixir.bcRemover);


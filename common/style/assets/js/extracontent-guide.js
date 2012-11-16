elixir.extracontentGuide = {};
elixir.extracontentGuide = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function showextracontentareas() {
		// Remove Any User Content From The ExtraContent Areas
		$elixir('#extraContainer1, #extraContainer2, #extraContainer3, #extraContainer4, #extraContainer5, #extraContainer6').remove();	
		
		// Show ExtraContent Area #2, and its trigger button, Which Starts Out Hidden
		$elixir('#extraContent1, #extraContent2, #extraContent3, #extraContent4, #extraContent5, #extraContent6, #extraContent2-trigger').show();	
		
		// Set Up The Styling And Sizes for the ExtraContent Area Samples
		$elixir('#extraContent1, #extraContent2, #extraContent3, #extraContent4, #extraContent5').css({'background-color':'rgba(198,70,66,0.8)' , 'height':'250px' , 'color' : '#ffffff' , 'text-align' : 'center' , 'line-height' : '250px' });	
		$elixir('#extraContent6').css({'background-color':'rgba(198,70,66,0.8)' , 'height':'80px' , 'color' : '#ffffff' , 'text-align' : 'center' , 'line-height' : '80px' });	
	
		// Add Labels To All ExtraContent Areas
		$elixir('#extraContent1').text('ExtraContent Area #1');	
		$elixir('#extraContent2').text('ExtraContent Area #2');	
		$elixir('#extraContent3').text('ExtraContent Area #3');	
		$elixir('#extraContent4').text('ExtraContent Area #4');	
		$elixir('#extraContent5').text('ExtraContent Area #5');	
		$elixir('#extraContent6').text('ExtraContent Area #6');	
	}
	
	$elixir(document).ready(function() {
		showextracontentareas();
	});	
})(elixir.extracontentGuide);


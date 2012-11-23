

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

/* Begin Elixir theme specific javascript */

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// 'elixir' is the global object for the elixir theme
var elixir = {};

// reduce potential conflicts with other scripts on the page
elixir.jQuery = jQuery.noConflict(true);
var $elixir = elixir.jQuery;

// Create unique object and namespace for theme functions
elixir.themeFunctions = {};

// Define a closure
elixir.themeFunctions = (function() {
    // When jQuery is used it will be available as $ and jQuery but only
    // inside the closure.
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function extraContent() {
		/*
			# ExtraContent (jQuery) #
			
			AUTHOR:	Adam Merrifield <http://adam.merrifield.ca>
					Giuseppe Caruso <http://www.bonsai-studio.net/>
			VERSION: r1.4.2
			DATE: 12-16-10 09:40
		
			USAGE:
			- be sure to include a copy of the jQuery libraray in the <head>
				before the inclusion of this function
			- noConflict mode is optional but highly recommended
			- call this script in the <head>
			- change the value of ecValue to match the number of ExtraContent
				areas in your theme
		*/
		$elixir(document).ready(function(){
			var extraContent =  (function() {
				// change ecValue to suit your theme
				var ecValue = 6;
				for (i=1;i<=ecValue;i++)
				{
					$elixir('#myExtraContent'+i+' script').remove();
					$elixir('#myExtraContent'+i).appendTo('#extraContainer'+i).show();
				}
			})();
		});
	}
	
	function blogEntryTopper() {
		/* 
		
		-=-= BLOG ENTRY TOPPER =-=-
		
		DESCRIPTION: 	Handles the blog entry topper images. Finds image in blog entries with an ALT tag
						of 'blogEntryTopper' and then moves image to the top of the entry. The theme's 
						CSS autosizes the image to fit the blog entry's width.
						
		AUTHOR: Adam Shiver
		VERSION: 1.0b
		DATE: May 9, 2011
		
		*/
	
			blogEntryTopperImg = $('.blog-entry img[alt^=blogEntryTopper]');
			blogEntryTopperImg.hide();
			blogEntryTopperImg.each(function() {
				/* Applies special class to the image */
				$elixir(this).addClass('blogEntryTopperImg');  
				/* Moves topper image to the top of the blog entry and wraps it in a div with a class of blogEntryTopper_wrapper  */
				$elixir(this).prependTo($(this).parent().parent()).show().wrap('<div class="blogEntryTopper_wrapper" />');
			});
	}


	function generalThemeFunctions() {	
		
		// hides several items before page loads
		$elixir('#extraContent1, #extraContent2-trigger, #extraContent2, #extraContent3, #extraContent4, #extraContent5, #extraContent6, nav#second_tier, #breadcrumb, .thumbnail-wrap').hide();
		
		// shows each ExtraContent area that has content
		if ($elixir('#myExtraContent1').length > 0) {
			$elixir('#extraContent1').show()
		} 

		if ($elixir('#myExtraContent2').length > 0) {
			$elixir('#extraContent2-trigger').show()
		} 

		$elixir('#extraContent2-trigger').click(
			function(){
				$elixir('#extraContent2').animate({opacity: 'toggle', height: 'toggle'}, 250, 'easeOutQuad');
				$elixir('#extraContent2-trigger').toggleClass('active-icon');
			}
		);
		
		if ($elixir('#myExtraContent3').length > 0) {
			$elixir('#extraContent3').show();
		} 
		
		if ($elixir('#myExtraContent4').length > 0) {
			$elixir('#extraContent4').show();
		} 

		if ($elixir('#myExtraContent5').length > 0) {
			$elixir('#extraContent5').show();
		} 

		if ($elixir('#myExtraContent6').length > 0) {
			$elixir('#extraContent6').delay(200).slideDown(300).fadeIn(300);
		} 

		$elixir('#modal-close-button').click(
			function(){
				$elixir('#extraContent6').delay(100).slideUp(200).fadeOut(200);
			}
		);

		$elixir('.blog-archive-link-enabled').addClass('icon-time');
		$elixir('.blog-category-link-enabled').addClass('icon-search');
		
		if ($elixir('.thumbnail-wrap .thumbnail-caption').length > 0) {
			$elixir('.thumbnail-wrap').css({'margin-bottom' : '80px'});	
		}
		
		// Add class to last breadcrumb item in the list
		$elixir('#breadcrumb li').last().addClass('lastItem');
		if ($elixir('#breadcrumb ul').length > 0) {
			$elixir('#breadcrumb').show();
		} 
		
		// Add class to last blog entry on a page
		$elixir('.blog-entry').last().addClass('lastBlogChild');
		
		// Move Social badges to their appropriate location
		$elixir('a.myBadge').appendTo('#social-badges');
		
	}


	function isiPhone(){
	    return (
	        (navigator.platform.indexOf("iPhone") != -1) ||
	        (navigator.platform.indexOf("iPod") != -1) || 
	        (navigator.platform.indexOf("iPad") != -1)
	    );
	}

	function navigation() {
		$elixir('nav#main-navigation li').has('ul').addClass('hasChild'); 
		$elixir('nav#main-navigation ul li ul li:first-child').addClass('firstChild'); 
		$elixir('nav#main-navigation ul li ul li:last-child').addClass('lastChild'); 

		/* Decides if visitor is using an iOS device and makes concessions for the horizontal navigation. */
		if(isiPhone()){
			$elixir('nav#main-navigation ul li').hover(
			  function () {
			    $elixir(this).find(">ul").animate({opacity: 'toggle' , height: 'toggle'}, 400, 'easeOutQuad');
			  }, 
			  function () {
			    $elixir(this).find(">ul").animate({opacity: 'toggle' , height: 'toggle'}, 300, 'easeOutQuad');
			  }
			);
		} else {
			$elixir('nav#main-navigation .inner ul li').hover(
			  function () {
			    $elixir(this).find(">ul").stop('true','true').animate({opacity: 'toggle'}, 155, 'easeOutQuad');
			  }
			);
		}

	}


	function photoAlbumThumbnails() {
		// loads each photo album one at a time by fading it in
		$elixir('.thumbnail-wrap').each(function(count) {
			$elixir(this).delay(60*count).fadeIn(550);
		});
				
	}

	$elixir(document).ready(function() {
		generalThemeFunctions();
		navigation();
		extraContent();
	});	
	
	$elixir(window).ready(function() {
		blogEntryTopper();
	});

	$elixir(window).load(function() {
		photoAlbumThumbnails();
	});
	
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

/* End Elixir theme specific javascript */

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */




	
})(elixir.themeFunctions);
/**
 * jQuery fixedHeader plugin.
 * 
 * @author   Dave Widmer
 * @version  @@version@@
 */
(function($){
	/**
	 * The fixed header object
	 */
	var fixedHeader = (function(){
		/**
		 * Initialization function
		 */
		var init = function(){
			return this.each(function(){
				clone(this);
			});
		},

		/**
		 * Clones the table
		 *
		 * @param table  DOMTable  The table to clone
		 */
		clone = function(table) {
			var offset = $(table).offset().top,
				cloned = $(table).clone()
				id = $(table).attr("id") || "fixedTable";

			// Work some magic on the cloned table
			
			cloned.attr('id', id+"-cloned");
			cloned.find('tbody').remove();

			cloned.css("position", "fixed").css("top", "0px");

			// Size the headers
			resize($(table), cloned);

			cloned.hide();

			// Add the table to the DOM
			$(table).after(cloned);

			// Bind a scroll event to the window
			$(window).bind("scroll", function(){
				move(cloned, offset, $(this).scrollTop());
			});

			// Bind a resize event to the window
			$(window).resize(function(){
				resize($(table), cloned);
			});
		},

		/**
		 * Move the header
		 *
		 * @param jQueryElement table  The table to move
		 * @param int           offset The window offset
		 * @param int           top    The top offset of the event
		 */
		move = function(table, offset, top) {
			if (top <= offset) {
				table.hide();
			} else {
				table.show();
			}	
		},

		/**
		 * Resizes the header
		 *
		 * @param  jQueryElement source  The source table
		 * @param  jQueryElement dest    The destination table
		 */
		resize = function(source, dest){
			dest.width(source.width());

			source.find("th").each(function(i){
				var selector = 'thead th:eq('+i+')';
				dest.find(selector).css('width', source.find(selector).css('width'));
			});

		};

		/**
		 * Public methods
		 */
		return {
			'init': init
		};
	})();

	// Add the function to jQuery
	$.fn.fixedHeader = fixedHeader.init;
})(jQuery);

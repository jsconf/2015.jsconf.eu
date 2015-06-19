// StickyNav by Robert https://github.com/rendro
var createStickyNav = function($node, reqAnimFrame, className) {
	className = className || 'active';

	var pos;
	var isSticky;
	var lastPos = -1;
	var stickyTop = ~~($node.offset().top);
	var $clone = $node.clone();

	$clone.insertAfter($node).hide();

	var loop = function() {
		reqAnimFrame(loop);
		pos = window.pageYOffset;
		if (pos === lastPos) {
			return;
		}
		var _isSticky = (pos >= stickyTop);
		if (_isSticky === isSticky) return;
		isSticky = _isSticky;
		lastPos = pos;
		$clone.toggle(isSticky).toggleClass(className, isSticky);
	};

	loop();
};

$(function() {
	// Sticky that nav up
	var $nav = $('.js-sticky-nav')
	if ($nav.length) {
		createStickyNav($nav, window.requestAnimationFrame)
	}
})

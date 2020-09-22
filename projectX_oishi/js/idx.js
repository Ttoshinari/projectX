$(window).load(function(){
	$('.gallery_carousel').carouFredSel({
		responsive:true,
		width:'variable',
		height:'variable',
		items: {
		visible: 1,
		start: 0
		},
		scroll: {
		items: 1,
		duration: 2000,
		timeoutDuration: 3000,
		easing: 'easeInOutQuint',
		fx:"crossfade"
		},
        prev: '.prev',
		next: '.next',
		pagination: {
		container: '#pager',
		deviation: 0
		}
	});
});

$(window).load(function(){
	$('.about_carousel').carouFredSel({
		responsive:true,
		width:'variable',
		height:'variable',
		items: {
		visible: 1,
		start: 0
		},
		scroll: {
		items: 1,
		duration: 2000,
		timeoutDuration: 3000,
		easing: 'easeInOutQuint',
		fx:"crossfade"
		},
        prev: '.prev',
		next: '.next',
		pagination: {
		container: '#pager',
		deviation: 0
		}
	});
});
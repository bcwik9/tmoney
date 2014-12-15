document.getElementById('vids').onclick = function (event) {
    blueimp.Gallery([
	{
	    title: 'Moxiie - Bottle Service',
	    href: 'https://www.youtube.com/watch?v=0hGBct3JCT0',
	    type: 'text/html',
	    youtube: '0hGBct3JCT0',
	    poster: 'tracey_bottleservice.jpg'
	},
	{
            title: 'Frozen - Albion',
            href: 'https://vimeo.com/22495944',
            type: 'text/html',
            vimeo: '22495944',
            poster: 'http://i.vimeocdn.com/portrait/2405267_300x300.jpg',
	},
	{
            title: 'Show Me Your Freak - Blake Sicily',
            href: 'https://vimeo.com/90347043',
            type: 'text/html',
            vimeo: '90347043',
            poster: 'http://i.vimeocdn.com/portrait/90347043_300x300.jpg',
	},
	
    ]);
}

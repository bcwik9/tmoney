document.getElementById('vids').onclick = function (event) {
    blueimp.Gallery([
	{
	    title: 'Moxiie - Bottle Service',
	    href: 'https://www.youtube.com/watch?v=0hGBct3JCT0',
	    type: 'text/html',
	    youtube: '0hGBct3JCT0',
	    poster: 'assets/bottleservice.jpg'
	},
	{
            title: 'Frozen - Albion',
            href: 'https://vimeo.com/22495944',
            type: 'text/html',
            vimeo: '22495944',
            poster: 'assets/thumbs/frozenalbion2.jpg',
	},
	{
            title: 'Show Me Your Freak - Blake Sicily',
            href: 'https://vimeo.com/90347043',
            type: 'text/html',
            vimeo: '90347043',
            poster: 'assets/showmeyourfreak.jpg',
	},
	
    ]);
}

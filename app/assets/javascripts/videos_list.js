document.getElementById('vids').onclick = function (event) {
    blueimp.Gallery([
	{
	    title: 'A YouYube video',
	    href: 'https://www.youtube.com/watch?v=0hGBct3JCT0',
	    type: 'text/html',
	    youtube: '0hGBct3JCT0',
	    poster: 'https://img.youtube.com/vi/0hGBct3JCT0/maxresdefault.jpg'
	},
	{
            title: 'A Vimeo video',
            href: 'https://vimeo.com/22495944',
            type: 'text/html',
            vimeo: '22495944',
            poster: 'http://i.vimeocdn.com/portrait/2405267_300x300.jpg',
	},
    ]);
}

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'Falling U',
        artist: 'T-ara',
        url: 'https://m804.music.126.net/20240521194935/68a1974b9a8114b374f7bdb02556698f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32099056798/6ffb/49fe/c982/d06dc82c46f412a9e82304e4e0f8d98b.m4a?authSecret=0000018f9ae564e40f430aaba31b1faa',
        cover: 'https://cn.bing.com/images/search?view=detailV2&ccid=5QXkzjfy&id=EF23F1621E9869AB7312AC0373EA0E0662D5BB71&thid=OIP.5QXkzjfymqXhjdYCur4VJQHaJQ&mediaurl=https%3a%2f%2fp2.itc.cn%2fq_70%2fimages01%2f20221109%2f65732d0a718240058e6aed7763965e64.jpeg&exph=1280&expw=1024&q=%e8%b5%b5%e9%9c%b2%e6%80%9d&simid=607995807415301945&FORM=IRPRST&ck=748F8C1703EB7A905765D564D6D24D65&selectedIndex=1&itb=0&qft=+filterui%3aaspect-square+filterui%3aimagesize-large&ajaxhist=0&ajaxserp=0',
    }, 
	]
});

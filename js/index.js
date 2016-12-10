var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onTransitionEnd: function (swiper) {
        var curIndex = swiper.activeIndex;
        var slides = swiper.slides;
        [].forEach.call(slides, function (item, index) {
            item.id = '';
            curIndex === index && (index === 0 ? item.id = 'page' + (slides.length - 2) : index === slides.length - 1 ? item.id = 'page1' : item.id = 'page' + curIndex);
        });
    }
});
var music = document.querySelector('.music'),
    mp3 = document.querySelector('#mp3');
window.setTimeout(function () {
    mp3.play();
    mp3.addEventListener('canplay', function () {
        music.style.opacity = 1;
        music.className = 'music musicCur';
    }, false);
}, 1000);
music.addEventListener('click', function () {
    if (mp3.paused) {
        mp3.play();
        music.className = 'music musicCur';
    } else {
        mp3.pause();
        music.className = 'music';
    }
});
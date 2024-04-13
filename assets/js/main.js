let audio = new Audio('assets/music/prodigy.mp3');
audio.volume = .9;
audio.autoplay = true;
$('.fa-play').show();
$('.fa-pause').hide();
$('.trigger').click(function () {
    if (audio.paused === false) {
        audio.pause();
        $('.fa-play').show();
        $('.fa-pause').hide();
        $('.music-card').removeClass('playing');
    } else {
        audio.play();
        $('.fa-pause').show();
        $('.fa-play').hide();
        $('.music-card').addClass('playing');
    }
});
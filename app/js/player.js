let player;

let sizes = {
    width: '445',
    height: '311',
};

if (window.matchMedia('(max-width: 1200px)').matches) {
    sizes.width = '370';
    sizes.height = '275';
}
if (window.matchMedia('(max-width: 768px)').matches) {
    sizes.width = '370';
    sizes.height = '275';
}
if (window.matchMedia('(max-width: 320px)').matches) {
    sizes.width = '290';
    sizes.height = '275';
}


$(".js-replacer").click(function () {
    if ($("#player").is("div")) {
        $(this).hide();
        player = new YT.Player('player', {
            height: sizes.height,
            width: sizes.width,
            playerVars: {
                'controls': 1,
                'autohide': 1
            },
            videoId: 'dQw4w9WgXcQ',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

    } else {
        player.autohide = 1;
        player.playVideo();
    }

    // when video ends
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        if (event.data === 0) {
            $("#player").remove();
            $(".video__player-container").append('<div id ="player" width="300" align="left" height="238" style="margin-right:30px;"></div>');
            $(".js-replacer").show();
        }
    }
});

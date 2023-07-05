// Here you can make new room for building

const rooms = {
    random : function(){
        const randomW = getRandomNum({min : 3, max : 5}),
              randomH = getRandomNum({min : 3, max : 5});

        const room = new Room({x : randomW, y : randomH});
              room.render();

        const $roomWrapper  = document.querySelector('.room-wrapper'),
              $roomWrapperX = $roomWrapper.getBoundingClientRect().x,
              $roomWrapperY = $roomWrapper.getBoundingClientRect().y,
              $roomWrapperW = $roomWrapper.getBoundingClientRect().width,
              $roomWrapperH = $roomWrapper.getBoundingClientRect().height;

    },
    magazine_0 : function({$target, $player}){
            const room = new Room({x : 3, y : 3});
            room.render();  

            const playerX = parseInt($player.style.left),
                  playerY = parseInt($player.style.top),
                  playerW = $player.getBoundingClientRect().width,
                  playerH = $player.getBoundingClientRect().height;

            const $room = document.querySelector('.room');

            const $roomWrapper  = document.querySelector('.room-wrapper'),
                  $roomWrapperX = $roomWrapper.getBoundingClientRect().x,
                  $roomWrapperY = $roomWrapper.getBoundingClientRect().y,
                  $roomWrapperW = $roomWrapper.getBoundingClientRect().width,
                  $roomWrapperH = $roomWrapper.getBoundingClientRect().height;
                  
            console.log($roomWrapperX)
            $player.style.zIndex = 11;
    }
}
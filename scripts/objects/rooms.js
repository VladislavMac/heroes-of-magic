// Here you can make new room for building

const rooms = {
      // You're rooms here 

      // custom_0 : {

      // }

      //
      house_0 : function({$target, $player}){
            const room = new Room({x : 3, y : 3});
            room.render();  

            const $room        = document.querySelector('.room');
            const playerX      = parseInt($player.style.left),
                  playerY      = parseInt($player.style.top),
                  playerW      = $player.getBoundingClientRect().width,
                  playerH      = $player.getBoundingClientRect().height;
            const $roomWrapper = $room.querySelector('.room-wrapper'),
                  roomWrapperX = $roomWrapper.getBoundingClientRect().x,
                  roomWrapperY = $roomWrapper.getBoundingClientRect().y,
                  roomWrapperW = $roomWrapper.getBoundingClientRect().width,
                  roomWrapperH = $roomWrapper.getBoundingClientRect().height;

            const decors = document.querySelectorAll('.decor');
            decors.forEach(decor =>{
                  decor.style.left = parseInt(decor.style.left) + roomWrapperX + 'px';
                  decor.style.top = parseInt(decor.style.top) + roomWrapperY + 'px';
            })

            $player.style.zIndex = 12;
            $player.style.left = (roomWrapperX) + 'px';
            $player.style.top = (roomWrapperY + roomWrapperH / 2) - (playerH / 2) + 'px';

      },
      shop_0 : function({$target, $player}){
            const room = new Room({x : 5, y : 3});
            room.render();  

            const $room        = document.querySelector('.room');
            const playerX      = parseInt($player.style.left),
                  playerY      = parseInt($player.style.top),
                  playerW      = $player.getBoundingClientRect().width,
                  playerH      = $player.getBoundingClientRect().height;
            const $roomWrapper = $room.querySelector('.room-wrapper'),
                  roomWrapperX = $roomWrapper.getBoundingClientRect().x,
                  roomWrapperY = $roomWrapper.getBoundingClientRect().y,
                  roomWrapperW = $roomWrapper.getBoundingClientRect().width,
                  roomWrapperH = $roomWrapper.getBoundingClientRect().height;

            const decors = document.querySelectorAll('.decor');
            decors.forEach(decor =>{
                  decor.style.left = parseInt(decor.style.left) + roomWrapperX + 'px';
                  decor.style.top = parseInt(decor.style.top) + roomWrapperY + 'px';
            })

            $player.style.zIndex = 12;
            $player.style.left = (roomWrapperX) + 'px';
            $player.style.top = (roomWrapperY + roomWrapperH / 2) - (playerH / 2) + 'px';
      }
}
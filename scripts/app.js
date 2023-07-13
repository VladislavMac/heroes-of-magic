"use strict";

window.onload = () =>{
    removeLoadScreen();
};

window.addEventListener('click', (event) =>{
    if( key_player_move ){
        const $player = document.querySelector('.player');
    
        const coords = {
            x : event.pageX,
            y : event.pageY
        }
    
        if( getOpportunityStep({$target : event.target, $item : $player, x : coords.x, y : coords.y, step : 100}) ){
            key_player_move = false 

            player.move({
                x       : coords.x, 
                y       : coords.y,
                shift   : event.shiftKey,
                $target : event.target
            })

            $player.addEventListener('transitionend', () =>{
                $player.querySelector('.player-wrapper').style.backgroundImage = `url('images/mobs/riper/idle.gif')`
                $player.style.transitionDuration = '2000ms'

                key_player_move = true
            })
        }
    }
})


"use strict";

window.onload = () =>{
    const load = document.querySelector('.load');
    load.style.display = 'none';
    console.log('Load')
};

window.addEventListener('click', (event) =>{
    if( key_movePlayer ){
        const $player = document.querySelector('.player');
    
        const coords = {
            x : event.pageX,
            y : event.pageY
        }
    
        if( getOpportunityStep({$target : event.target, $item : $player, x : coords.x, y : coords.y, step : 100}) ){
            key_movePlayer = false 

            player.move({
                x       : coords.x, 
                y       : coords.y,
                shift   : event.shiftKey,
                $target : event.target
            })

            $player.addEventListener('transitionend', () =>{
                $player.querySelector('.player-wrapper').style.backgroundImage = `url('images/mobs/riper/idle.gif')`
                $player.style.transitionDuration = '2000ms'

                key_movePlayer = true
            })
        }
    }
})


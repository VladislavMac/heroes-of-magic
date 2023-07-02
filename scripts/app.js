"use strict";

const map = new Map({x : 10, y : 10});
map.render();

const player = new Player({
    x : 350, y : 200,
    w : 100, h : 100
});
player.render();

const renderBuildings = () => {
    for( let i = 0; i < builds.length; i++ ){
        const build = new Build({
            build : builds[i]
        });
        build.render();
    }
}
renderBuildings();

const renderElements = () => {
    for( let i = 0; i < elements.length; i++ ){
        const element = new Element({
            element : elements[i]
        });
    
        element.render();
    }
}
renderElements();

const renderMobs = () => {
    for( let i = 0; i < mobs.length; i++ ){
        const mob = new Mob({
            mob    : mobs[i]
        });
    
        mob.render();
        mob.move();
    }
}
renderMobs();

window.onload = () =>{
    const load = document.querySelector('.load');
    load.style.display = 'none';
    console.log('Load')
};

let movePlayerKey = true;

window.addEventListener('click', (event) =>{
    if( movePlayerKey ){
        const $player = document.querySelector('.player');
    
        const coords = {
            x : event.pageX,
            y : event.pageY
        }
    
        if( getOpportunityStep({$target : event.target, $item : $player, x : coords.x, y : coords.y, step : 100}) ){
            movePlayerKey = false 

            player.move({
                x : coords.x, 
                y : coords.y,
                shift : event.shiftKey,
                $target : event.target
            })

            $player.addEventListener('transitionend', () =>{
                $player.querySelector('.player-wrapper').style.backgroundImage = `url('images/mobs/riper/idle.gif')`
                $player.style.transitionDuration = '2000ms'

                movePlayerKey = true
            })
        }
    }
})


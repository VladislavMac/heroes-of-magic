const map = new Map({
    x : 10,
    y : 10
});

const player = new Player({
    x : key_player_coords.x,
    y : key_player_coords.y,
    w : 100, h : 100
});


const renderBuildings = () => {
    for( let i = 0; i < builds.length; i++ ){
        const building = builds[i];
        building.$buildWrapper.id = i;
        building.render();

        list.buildings.push(building);
    }
}

const renderElements = () => {
    for( let i = 0; i < elements.length; i++ ){
        const element = elements[i];
        element.$elementWrapper.id = i;
        element.render();

        list.elements.push(element);
    }
}

const renderMobs = () => {
    for( let i = 0; i < mobs.length; i++ ){
        const mob = mobs[i];
        mob.$mobWrapper.id = i;
        mob.render();
        mob.move();

        list.mobs.push(mob);
    }
}


map   .render();
player.render();

renderBuildings();
renderElements();
renderMobs();

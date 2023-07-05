const map = new Map({
    x : 10,
    y : 10
});

const player = new Player({
    x : 350, y : 200,
    w : 100, h : 100
});

const renderBuildings = () => {
    for( let i = 0; i < builds.length; i++ ){
        const build = new Build({
            build : builds[i],
            id : i,
        });
        list.buildings.push(build);

        build.render();
    }
}

const renderElements = () => {
    for( let i = 0; i < elements.length; i++ ){
        const element = new Element({
            element : elements[i]
        });
        list.elements.push(element);
    
        element.render();
    }
}

const renderMobs = () => {
    for( let i = 0; i < mobs.length; i++ ){
        const mob = new Mob({
            mob : mobs[i],
            id  : i,
        });
        list.mobs.push(mob);
    
        mob.render();
        mob.move();
    }
}


map   .render();
player.render();

renderBuildings();
renderElements();
renderMobs();

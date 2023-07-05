// Here you can make new mobs 

const mobs = [
    new Mob({
        config  : config.mobs.mob_1,
        position  : 'friendly', // friendly or enemy
        status : 'open',
        shop    : false,
        move    : true,
        hp      : 100,
        x : 450 , y : 300,
    }),
]
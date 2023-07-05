// Here you can make new build

const builds = [
    {
        config : config.buildings.build_1,
        status : 'open',
        x : 102 , y : 203,
        use : function({$target, $player}){
            rooms.random({$target, $player})
        },
    },
    {
        config : config.buildings.build_2,
        status : 'open',
        x : 100 , y : 400,
        use : function({$target, $player}){
            rooms.random({$target, $player})
        },
    },
    {
        config : config.buildings.build_3,
        status : 'open',
        x : 420 , y : 190,
        use : function({$target, $player}){
            rooms.random({$target, $player})
        },
    },

]
// Here you can make new build

const builds = [
    new Build({
        config : config.buildings.build_2,
        status : 'open',
        x : 100,
        y : 200,
        use : function({$target, $player}){
            decors.shop_0();
            rooms.shop_0({$target, $player})
        },
    }),
    new Build({
        config : config.buildings.build_1,
        status : 'open',
        x : 100,
        y : 360,
        use : function({$target, $player}){
            decors.house_0();
            rooms.house_0({$target, $player})
        },
    }),
    new Build({
        config : config.buildings.build_5,
        status : 'open',
        x : 100,
        y : 520,
        use : function({$target, $player}){
            decors.house_0();
            rooms.house_0({$target, $player})
        },
    }),
]
const config = {
    buildings : {
        build_1 : {
            type : 'house',
            icon : 'building_1',
        },
        build_2 : {
            type : 'house',
            icon : 'building_5',
        },
        build_3 : {
            type : 'shop',
            icon : 'building_2',
        },
    },
    elements : {
        element_1 : {
            type : 'element',
            icon : 'tree_1',
        },
    },
    mobs : {
        mob_1 : {
            type    : 'mob',
            name    : 'orc',
            hp      : 100,
            width   : 100,
            height  : 100,
            animations : {
                idle   : 'idle',
                walk   : 'walk',
                attack : 'attack',
                die    : 'die', 
            },
        }
    }
}

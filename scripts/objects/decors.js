// Here is your decors for room

const decors = {
    house_0 : function(){
        const decors = [
            new Decor({
                config : config.decor.decor_11, 
                status : 'open', 
                x : 20, y : 20, 
            }),
            new Decor({
                config : config.decor.decor_8, 
                status : 'exit', 
                x : 0, y : 90, 
            }),
        ]

        for( let i = 0; i < decors.length; i++ ){
            const decor = decors[i];
            decor.$decorWrapper.id = i;
            decor.render();
    
            list.decors.push(decor);
        }
    },
    shop_0 : function(){
        const decors = [
            new Decor({
                config : config.decor.decor_8, 
                status : 'exit', 
                x : 0, y : 90, 
            }),
            new Decor({
                config : config.decor.decor_10, 
                status : 'open', 
                x : 100, y : 90, 
            }),
        ]

        for( let i = 0; i < decors.length; i++ ){
            const decor = decors[i];
            decor.$decorWrapper.id = i;
            decor.render();
    
            list.decors.push(decor);
        }
    }
}
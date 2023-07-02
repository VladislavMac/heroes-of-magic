window.addEventListener('contextmenu', (event) => {
    console.log("x : " + event.layerX, ", y : " + event.layerY + "," );
})

window.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyH':
            const elements = { 
                $mobs     : document.querySelectorAll('.mob'),
                $elements : document.querySelectorAll('.element'),
                $builds   : document.querySelectorAll('.build'),
                $player   : document.querySelectorAll('.player'),
            }

            for (const key in elements) {
                elements[key].forEach(element => {
                    console.log()
                    if( element.style.border === '' ){
                        element.style.border = '0.1vw solid yellow'
                    }else{
                        element.style.border = ''
                    }
                });
            }
            break;
    
        default:
            break;
    }
})
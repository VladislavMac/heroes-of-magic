function getCenterY({y, h}){
    return y - (h / 2)
}
function getCenterX({x, w}){
    return x - (w / 2)
}

function getRandomNum({min, max}){
    return Math.floor(Math.random() * (max - min)) + min
}

function getParentId({x, y}){
    const $terrainItems = document.querySelectorAll('.terrain-wrapper-column_item');
    let temp;
    
    $terrainItems.forEach($item =>{
        let $parentItem = $item.parentElement;

        if( +$item.id == y && +$parentItem.id == x ){
            temp = $item
        }
    })
    return temp
}

function getNearbyItems({$item}){
    // const x = $item.getBoundingClientRect().x,
    //       y = $item.getBoundingClientRect().y,
    //       w = $item.getBoundingClientRect().width,
    //       h = $item.getBoundingClientRect().height;
    return $item
}

function getParent({x, y}){
    let $parent;

    const $terrainItems = document.querySelectorAll('.terrain-wrapper-column_item');

    $terrainItems.forEach($item =>{
        const itemPos = $item.getBoundingClientRect();
        if( x <= (itemPos.x + itemPos.width) &&
            x >= (itemPos.x) &&
            y <= (itemPos.y + itemPos.height) &&
            y >= (itemPos.y) 
        ){
            $parent = $item;
        }
    })

    return $parent
}

function getOpportunityStep({$target, $item, x, y, step}){
    const itemX = parseInt($item.style.left),
          itemY = parseInt($item.style.top),
          itemW = $item.getBoundingClientRect().width,
          itemH = $item.getBoundingClientRect().height;
          
    const $room = document.querySelector('.room');
    const $roomWrapper = document.querySelector('.room-wrapper');
        
    if( !$target.classList.contains('close') ){
        if( (x >= itemX && x <= itemX + itemW + step) || (x <= itemX && x >= itemX - step) ){
            if( (y <= itemY && y >= itemY - step ) || ( y >= itemY && y <= itemY + itemH + step) ){
                if( $room.style.display === 'flex' && $roomWrapper !== null ){
                    const roomWrapperX = $roomWrapper.getBoundingClientRect().x,
                          roomWrapperY = $roomWrapper.getBoundingClientRect().y,
                          roomWrapperW = $roomWrapper.getBoundingClientRect().width,
                          roomWrapperH = $roomWrapper.getBoundingClientRect().height;

                    if( (roomWrapperX <= x && (roomWrapperX + roomWrapperW) >= x)){
                        if(roomWrapperY <= y && (roomWrapperY + roomWrapperH) >= y){
                            return true
                        }
                    }
                }else{
                    return true
                }
            }
        }
    }
    return false
}

function addLoadScreen(){
    const load = document.querySelector('.load');
    load.style.display = 'flex';
}

function removeLoadScreen(){
    const load = document.querySelector('.load');
    load.querySelector('.load-wrapper').style.display = 'none';
    load.style.background = 'transparent';
    setTimeout(() =>{
        load.style.display = 'none';
        load.style.background = '#111';
        load.querySelector('.load-wrapper').style.display = 'flex';
    }, 500)
}

function openRoom({$target, $player}){
    const buildID = parseInt($target.id);

    list.buildings[buildID].use({
        $target : $target, 
        $player : $player
    })
    addLoadScreen()

    setTimeout(() =>{
        removeLoadScreen()
    }, 3000)
}

function exitRoom(){
    const $decors      = document.querySelectorAll('.decor');
    const $room        = document.querySelector('.room');
    const $roomWrapper = $room.querySelector('.room-wrapper');
    
    $decors.forEach($decor => $decor.remove())
    $roomWrapper.remove();
    $room.style.display = 'none';
}
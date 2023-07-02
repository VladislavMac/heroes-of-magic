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
          
    if( !$target.classList.contains('close') ){
        if( (x >= itemX && x <= itemX + itemW + step) || (x <= itemX && x >= itemX - step) ){
            if( (y <= itemY && y >= itemY - step ) || ( y >= itemY && y <= itemY + itemH + step) ){
                return true
            }
        }
    }
    return false
}
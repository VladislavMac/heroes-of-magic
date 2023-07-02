class Map{
    constructor({x, y}){
        this.x = x;
        this.y = y;

        this.$terrain = document.createElement('div');
        this.$terrain.className = 'terrain';

        this.$terrainWrapper = document.createElement('div');
        this.$terrainWrapper.className = 'terrain-wrapper';

        this.$terrain.appendChild(this.$terrainWrapper)
        
        for( let column = 1; column <= this.x; column++ ){

            this.$column = document.createElement('div');
            this.$column.className = 'terrain-wrapper-column';
            this.$column.id = column

            this.$terrainWrapper.appendChild(this.$column);

            for( let item = 1; item <= this.y; item++ ){

                this.$item = document.createElement('div');
                this.$item.className = 'terrain-wrapper-column_item';
                this.$item.id = item
                this.$item.innerHTML = `<div id='${item}' class="terrain-wrapper-column_item-wrapper"></div>`;

                this.$column.appendChild(this.$item);
            }
        }
    }

    render(){
        document.querySelector('body').appendChild(this.$terrain);
    }
}
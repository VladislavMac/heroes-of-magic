class Room{
    constructor({x, y}){
        this.x = x,
        this.y = y;
        this.$room = document.querySelector('.room');

        this.$roomWrapper = document.createElement('div');
        this.$roomWrapper.className = 'room-wrapper';

        for( let column = 1; column <= this.x; column++ ){

            this.$column = document.createElement('div');
            this.$column.className = 'room-wrapper-column';
            this.$column.id = column

            this.$roomWrapper.appendChild(this.$column);

            for( let item = 1; item <= this.y; item++ ){

                this.$item = document.createElement('div');
                this.$item.className = 'room-wrapper-column_item';
                this.$item.id = item
                this.$item.innerHTML = `<div id='${item}' class="room-wrapper-column_item-wrapper"></div>`;

                this.$column.appendChild(this.$item);
            }
        }

    }

    render(){
        this.$room.appendChild(this.$roomWrapper)
        this.$room.style.display = 'flex'
    }
}
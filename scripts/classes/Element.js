class Element{
    constructor({config, status, x, y, width, height}){
        this.config = config;
        this.status = status;

        this.x = x,
        this.y = y,

        this.width = width
        this.height = height

        if(this.width === undefined && this.height === undefined){
            this.width  = this.config.width
            this.height = this.config.height
        }

        this.$element = document.createElement('div');
        this.$element.className = 'element';

        this.$element.style.width  = `${this.width}px`;
        this.$element.style.height = `${this.height}px`;

        this.$element.style.left = getCenterX({x: this.x, w : this.width}) + 'px';
        this.$element.style.top = this.y - this.height + 'px';

        this.$elementWrapper = document.createElement('div');
        this.$elementWrapper.className = 'element-wrapper'
        this.$elementWrapper.classList.add(this.status);

        this.$elementWrapper.style.backgroundImage = `url('images/elements/${this.config.icon}.png')`

        this.$element.appendChild(this.$elementWrapper)

    }

    closeDoors(){
        if(this.$elementWrapper.classList.contains('open')){
            this.$elementWrapper.classList.remove('open');    
        }
        this.$elementWrapper.classList.add('close');
    }
    openDoors(){
        if(this.$elementWrapper.classList.contains('close')){
            this.$elementWrapper.classList.remove('close');    
        }
        this.$elementWrapper.classList.add('open');
    }

    render(){
        document.querySelector('body').appendChild(this.$element)
    }
}
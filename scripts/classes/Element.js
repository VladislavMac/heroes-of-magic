class Element{
    constructor({element}){
        this.element = element;

        this.x = this.element.x,
        this.y = this.element.y,
        this.w = this.element.width,
        this.h = this.element.height;

        this.$element = document.createElement('div');
        this.$element.className = 'element';

        this.$element.style.width  = `${this.w}px`;
        this.$element.style.height = `${this.h}px`;

        this.$element.style.left = getCenterX({x: this.x, w : this.w}) + 'px';
        this.$element.style.top = this.y - this.h + 'px';

        this.$elementWrapper = document.createElement('div');
        this.$elementWrapper.className = 'element-wrapper'
        this.$elementWrapper.classList.add(this.element.status);

        this.$elementWrapper.style.backgroundImage = `url('images/elements/${this.element.config.icon}.png')`

        this.$element.appendChild(this.$elementWrapper)

    }

    closeDoors(){
        if(this.$buildWrapper.classList.contains('open')){
            this.$buildWrapper.classList.remove('open');    
        }
        this.$buildWrapper.classList.add('close');
    }
    openDoors(){
        if(this.$buildWrapper.classList.contains('close')){
            this.$buildWrapper.classList.remove('close');    
        }
        this.$buildWrapper.classList.add('open');
    }

    render(){
        document.querySelector('body').appendChild(this.$element)
    }
}
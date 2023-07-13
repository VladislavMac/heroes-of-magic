class Decor{
    constructor({config, status, x, y, width, height}){
        this.config = config;
        this.status = status;

        this.x = x,
        this.y = y,

        this.width = width;
        this.height = height;

        if(this.width === undefined && this.height === undefined){
            this.width = this.config.width,
            this.height = this.config.height;
        }

        this.$decor = document.createElement('div');
        this.$decor.className = 'decor';

        this.$decor.style.width  = `${this.width}px`;
        this.$decor.style.height = `${this.height}px`;

        this.$decor.style.left = this.x + 'px';
        this.$decor.style.top = this.y + 'px';

        this.$decorWrapper = document.createElement('div');
        this.$decorWrapper.className = 'decor-wrapper'
        this.$decorWrapper.classList.add(this.status);

        this.$decorWrapper.style.backgroundImage = `url('images/decors/${this.config.icon}.png')`

        this.$decor.appendChild(this.$decorWrapper)

    }

    closeDoors(){
        if(this.$decorWrapper.classList.contains('open')){
            this.$decorWrapper.classList.remove('open');    
        }
        this.$decorWrapper.classList.add('close');
    }
    openDoors(){
        if(this.$decorWrapper.classList.contains('close')){
            this.$decorWrapper.classList.remove('close');    
        }
        this.$decorWrapper.classList.add('open');
    }

    render(){
        document.querySelector('body').appendChild(this.$decor)
    }
}
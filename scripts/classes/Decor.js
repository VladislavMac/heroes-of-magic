class Decor{
    constructor({decor}){
        this.decor = decor;

        this.x = this.decor.x,
        this.y = this.decor.y,
        this.w, this.h;

        if(this.decor.width !== undefined && this.decor.height !== undefined){
            this.w = this.decor.width,
            this.h = this.decor.height;
        }else{
            this.w = this.decor.config.width,
            this.h = this.decor.config.height;
        }

        this.$decor = document.createElement('div');
        this.$decor.className = 'decor';

        this.$decor.style.width  = `${this.w}px`;
        this.$decor.style.height = `${this.h}px`;

        this.$decor.style.left = getCenterX({x: this.x, w : this.w}) + 'px';
        this.$decor.style.top = this.y - this.h + 'px';

        this.$decorWrapper = document.createElement('div');
        this.$decorWrapper.className = 'decor-wrapper'
        this.$decorWrapper.classList.add(this.decor.status);

        this.$decorWrapper.style.backgroundImage = `url('images/decors/${this.decor.config.icon}.png')`

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
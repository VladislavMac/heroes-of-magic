class Build{
    constructor({build}){
        this.build = build;

        this.x = this.build.x,
        this.y = this.build.y,
        this.w = this.build.width,
        this.h = this.build.height;

        this.$build = document.createElement('div');
        this.$build.className = 'build';

        this.$build.style.width  = `${this.w}px`;
        this.$build.style.height = `${this.h}px`;

        this.$build.style.left = getCenterX({x: this.x, w : this.w}) + 'px';
        this.$build.style.top = this.y - this.h + 'px';

        this.$buildWrapper = document.createElement('div');
        this.$buildWrapper.className = 'build-wrapper'
        this.$buildWrapper.classList.add(this.build.status);
        
        this.$buildWrapper.style.backgroundImage = `url('images/buildings/${this.build.config.icon}.png')`

        this.$build.appendChild(this.$buildWrapper)
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
        document.querySelector('body').appendChild(this.$build)
    }
}
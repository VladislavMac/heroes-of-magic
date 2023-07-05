class Build{
    constructor({config, status, x, y, w, h, use}){
        this.config = config;
        this.status = status;
        this.use    = use;

        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h;

        if(this.w === undefined && this.h === undefined){
            this.w = this.config.width,
            this.h = this.config.height;
        }

        this.$build = document.createElement('div');
        this.$build.className = 'build';

        this.$build.style.width  = `${this.w}px`;
        this.$build.style.height = `${this.h}px`;

        this.$build.style.left = getCenterX({x: this.x, w : this.w}) + 'px';
        this.$build.style.top = this.y - this.h + 'px';

        this.$buildWrapper = document.createElement('div');
        this.$buildWrapper.className = 'build-wrapper'
        this.$buildWrapper.classList.add(this.status);
        
        this.$buildWrapper.style.backgroundImage = `url('images/buildings/${this.config.icon}.png')`

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
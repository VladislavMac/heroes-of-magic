class Mob{
    constructor({mob, id}){
        this.mob   = mob;
        this.id    = id;
        
        this.moves = this.mob.move;
        this.x     = this.mob.x;
        this.y     = this.mob.y;
        this.w , this.h;

        if(this.mob.width !== undefined && this.mob.height !== undefined){
            this.w = this.mob.width,
            this.h = this.mob.height;
        }else{
            this.w = this.mob.config.width,
            this.h = this.mob.config.height;
        }

        this.$mob = document.createElement('div');
        this.$mob.className = 'mob';

        this.$mob.style.width  = `${this.w}px`;
        this.$mob.style.height = `${this.h}px`;

        this.$mob.style.left = getCenterX({x: this.x, w : this.w}) + 'px';
        this.$mob.style.top  = getCenterY({y : this.y, h : this.h}) + 'px';

        this.$mobWrapper = document.createElement('div');
        this.$mobWrapper.className = 'mob-wrapper';
        this.$mobWrapper.classList.add(this.mob.status);
        
        this.$mobWrapper.style.backgroundImage = `url('images/mobs/${this.mob.config.name}/${this.mob.config.animations.idle}.gif')`
      
        this.$mob.appendChild(this.$mobWrapper);

        this.moveX = this.x;
        this.moveY = this.y;
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

    move(){
        if( this.moves ){
            const $terrain = document.querySelector('.terrain-wrapper');
    
            const terrainX = $terrain.getBoundingClientRect().x,
                  terrainY = $terrain.getBoundingClientRect().y,
                  terrainW = $terrain.getBoundingClientRect().width,
                  terrainH = $terrain.getBoundingClientRect().height;
    
            // const $player  = document.querySelector('.player');
    
            // const playerX = $player.getBoundingClientRect().x,
            //       playerY = $player.getBoundingClientRect().y,
            //       playerW = $player.getBoundingClientRect().width,
            //       playerH = $player.getBoundingClientRect().height;
                  
            const lengthX = 30,
                  lengthY = 30;
    
            setInterval(()=>{
                let randomY,
                    randomX;
    
                if( this.moveY <= lengthY ){
                    randomY = getRandomNum({min : 0, max : lengthY});
                    
                }else if( this.moveY + this.mob.height >= (terrainY + terrainH - lengthY) ){
                    randomY = getRandomNum({min : -lengthY, max : 0});
    
                }else{
                    randomY = getRandomNum({min : -lengthY, max : lengthY});
                }
    
                if( this.moveX <= lengthX ){
                    randomX = getRandomNum({min : 0, max : lengthX});
    
                }else if( this.moveX + this.mob.width >= (terrainX + terrainW - lengthX) ){
                    randomX = getRandomNum({min : -lengthX, max : 0});
    
                }else{
                    randomX = getRandomNum({min : -lengthX, max : lengthX});
                }
    
                if( randomX < 0 ){
                    this.$mobWrapper.style.transform = 'scale(-1, 1)';
                }else{
                    this.$mobWrapper.style.transform = 'scale(1, 1)';
                }
    
                this.moveY = this.moveY + randomY;
                this.moveX = this.moveX + randomX;
    
                this.$mob.style.top = this.moveY + 'px';
                this.$mob.style.left = this.moveX + 'px';
    
                this.$mobWrapper.style.backgroundImage = `url('images/mobs/${this.mob.config.name}/${this.mob.config.animations.walk}.gif')`
                this.$mob.addEventListener('transitionend', () => this.$mobWrapper.style.backgroundImage = `url('images/mobs/${this.mob.config.name}/${this.mob.config.animations.idle}.gif')`)
            }, getRandomNum({min : 1000, max : 5000  }))
        }
    }

    render(){
        document.querySelector('body').appendChild(this.$mob)
    }
}
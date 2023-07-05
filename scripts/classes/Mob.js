class Mob{
    constructor({config, position, status, shop, move, hp, x, y, width, height}){
        this.config   = config;
        this.position = position;
        this.status   = status;
        this.shop     = shop;
        this.moves     = move;
        this.hp       = hp;

        this.x        = x;
        this.y        = y;
        this.w        = width;
        this.h        = height;

        if(this.w === undefined && this.h === undefined){
            this.w = this.config.width,
            this.h = this.config.height;
        }

        this.$mob = document.createElement('div');
        this.$mob.className = 'mob';

        this.$mob.style.width  = `${this.w}px`;
        this.$mob.style.height = `${this.h}px`;

        this.$mob.style.left = getCenterX({x: this.x, w : this.w}) + 'px';
        this.$mob.style.top  = getCenterY({y : this.y, h : this.h}) + 'px';

        this.$mobWrapper = document.createElement('div');
        this.$mobWrapper.className = 'mob-wrapper';
        this.$mobWrapper.classList.add(this.status);
        
        this.$mobWrapper.style.backgroundImage = `url('images/mobs/${this.config.name}/${this.config.animations.idle}.gif')`
      
        this.$mob.appendChild(this.$mobWrapper);

        this.moveX = this.x;
        this.moveY = this.y;
    }

    closeDoors(){
        if(this.$mobWrapper.classList.contains('open')){
            this.$mobWrapper.classList.remove('open');    
        }
        this.$mobWrapper.classList.add('close');
    }
    openDoors(){
        if(this.$mobWrapper.classList.contains('close')){
            this.$mobWrapper.classList.remove('close');    
        }
        this.$mobWrapper.classList.add('open');
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
                    
                }else if( this.moveY + this.h >= (terrainY + terrainH - lengthY) ){
                    randomY = getRandomNum({min : -lengthY, max : 0});
    
                }else{
                    randomY = getRandomNum({min : -lengthY, max : lengthY});
                }
    
                if( this.moveX <= lengthX ){
                    randomX = getRandomNum({min : 0, max : lengthX});
    
                }else if( this.moveX + this.w >= (terrainX + terrainW - lengthX) ){
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
    
                this.$mobWrapper.style.backgroundImage = `url('images/mobs/${this.config.name}/${this.config.animations.walk}.gif')`
                this.$mob.addEventListener('transitionend', () => this.$mobWrapper.style.backgroundImage = `url('images/mobs/${this.config.name}/${this.config.animations.idle}.gif')`)
            }, getRandomNum({min : 1000, max : 5000  }))
        }
    }

    render(){
        document.querySelector('body').appendChild(this.$mob)
    }
}
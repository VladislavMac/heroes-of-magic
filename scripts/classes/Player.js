class Player{
    constructor({x, y, w, h}){

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.speed = 1500 

        this.moveX = x;

        this.$player                  = document.createElement('div');
        this.$player.className        = 'player';

        this.$player.style.width      = this.w + 'px';
        this.$player.style.height     = this.h + 'px';
        this.$player.style.left       = this.x + 'px';
        this.$player.style.top        = this.y + 'px';

        this.$player.style.transitionDuration = this.speed + 'ms';

        this.$playerWrapper           = document.createElement('div');
        this.$playerWrapper.className = 'player-wrapper'

        this.$playerWrapper.style.backgroundImage = `url('images/mobs/riper/idle.gif')`
        
        this.$player.appendChild(this.$playerWrapper);
    }

    move({x, y, shift, $target}){

        if( this.moveX > x ){
            this.$playerWrapper.style.transform = 'scale(-1, 1)';
        }else if( this.moveX < x ){
            this.$playerWrapper.style.transform = 'scale(1, 1)';
        }

        this.moveX = x;

        this.x = getCenterX({x : x, w : this.w}),
        this.y = getCenterY({y : y, h : this.h});

        if( shift ){
            this.$player.style.transitionDuration = this.speed + 'ms';

            this.$playerWrapper.style.backgroundImage = `url('images/mobs/riper/run.gif')`
        }else{
            this.$playerWrapper.style.backgroundImage = `url('images/mobs/riper/walk.gif')`
        }

        this.$player.style.left = this.x + 'px',
        this.$player.style.top = this.y + 'px';

        if( $target.classList.contains('build-wrapper') ){
            const buildID = parseInt($target.id);
            setTimeout(() =>{
                list.buildings[buildID].build.use({$target : $target, $player : this.$player})
            }, this.speed)
        }
    }

    render(){
        document.querySelector('body').appendChild(this.$player);
    }
}
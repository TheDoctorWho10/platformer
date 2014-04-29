game.PlayerEntity = me.ObjectEntity.extend ( {
    init: function (x, y, settings){
        settings.image = "player1-spritesheet";
        settings.spritewidth = "72";
        settings.spriteheight = "97";
        settings.width = 72;
        settings.height = 97;
        this.parent (x, y, settings);
        this.setVelocity(0, 5 );
        
        this.renderable.addAnimation  ("idle", [3]);
        this.renderable.setCurrentAnimation("idle");
        
        this.renderable.addAnimation  ("running right", [8]);
        
        this.renderable.addAnimation ("jumping", [2]);
        
        this.renderable.addAnimation ("crouching", [0]);
        this.setVelocity (5, 20);
    },
    
    update: function () {
        if (me.input.isKeyPressed ("right")) {
            this.vel.x += this.accel.x * me.timer.tick;
            
            
        this.renderable.setCurrentAnimation("running right");
        }
        else if (me.input.isKeyPressed ("left")) {
            this.vel.x -= this.accel.x *me.timer.tick;
        }
        else if (me.input.isKeyPressed ("up")) {
            this.vel.y -=  this.accel.y *me.timer.tick;
            
            this.renderable.setCurrentAnimation ("jumping");
        }
        else if (me.input.isKeyPressed ("down")) {
            this.vel.y +=  this.accel.y *me.timer.tick;
            
            this.renderable.setCurrentAnimation ("crouching");
        }
        else {
            this.vel.x = 0;
            
        }
            var collision = me.game.world.collide(this);
            this.updateMovement ();
            return true;

    }
    
});

game.SlimeEntity = me.ObjectEntity.extend ({
    init: function (x, y, settings) {
        settings.image = "slime-spritesheet";
        settings.spritewidth = "72";
        settings.spriteheight = "97";
        this.parent (x, y, settings);
    },
            update: function () {}
});
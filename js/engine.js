export default class Engine{
constructor(player,enemies,particles,boss,ui){
this.player=player;
this.enemies=enemies;
this.particles=particles;
this.boss=boss;
this.ui=ui;
this.score=0;
this.level=1;
}

update(){
if(this.ui.paused) return;

this.player.update();
this.enemies.update(this.player);
this.particles.update();
this.boss.update();

this.score++;
if(this.score%600===0){
this.level++;
this.enemies.spawn(this.level);
}
}

draw(ctx){
ctx.clearRect(0,0,360,640);
this.player.draw(ctx);
this.enemies.draw(ctx);
this.particles.draw(ctx);
this.boss.draw(ctx);
this.ui.draw(ctx,this.score,this.level);
}
}

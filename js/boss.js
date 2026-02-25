export default class Boss{
constructor(){
this.active=false;
}

spawn(){
this.active=true;
this.x=360;
this.y=480;
this.w=90;
this.h=90;
this.hp=50;
this.vx=-2;
}

update(){
if(!this.active) return;
this.x+=this.vx;
}

draw(ctx){
if(!this.active) return;
ctx.fillStyle="#ffaa00";
ctx.fillRect(this.x,this.y,this.w,this.h);
}
}

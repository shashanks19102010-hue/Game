import {clamp} from "./utils.js";

export default class Player{
constructor(){
this.x=70;
this.y=520;
this.w=38;
this.h=38;
this.vx=0;
this.vy=0;
this.gravity=1.3;
this.jumpPower=-18;
this.grounded=true;
}

update(){
this.vy+=this.gravity;
this.y+=this.vy;
this.x+=this.vx;

this.x=clamp(this.x,0,322);

if(this.y+this.h>560){
this.y=560-this.h;
this.vy=0;
this.grounded=true;
}
}

jump(){
if(this.grounded){
this.vy=this.jumpPower;
this.grounded=false;
}
}

draw(ctx){
ctx.fillStyle="#ffffff";
ctx.shadowBlur=20;
ctx.shadowColor="#00eaff";
ctx.fillRect(this.x,this.y,this.w,this.h);
ctx.shadowBlur=0;
}
}

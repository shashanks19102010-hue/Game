import {random,rectCollision} from "./utils.js";
import {enemyAI} from "./ai.js";

export default class Enemies{
constructor(){
this.list=[];
}

spawn(level){
let types=["runner","jumper","zigzag","hunter"];
let type=types[Math.floor(Math.random()*types.length)];

this.list.push({
x:360,
y:560,
w:36,
h:36,
vx:-3-level*0.3,
vy:0,
type:type,
step:0
});
}

update(player){
this.list.forEach((e,i)=>{
enemyAI(e,player);
e.vy+=1.3;
e.y+=e.vy;
e.x+=e.vx;

if(rectCollision(player,e)){
player.dead=true;
}

if(e.x<-50) this.list.splice(i,1);
});
}

draw(ctx){
this.list.forEach(e=>{
ctx.fillStyle="#ff0055";
ctx.fillRect(e.x,e.y,e.w,e.h);
});
}
}

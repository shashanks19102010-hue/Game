export default class Particles{
constructor(){
this.list=[];
}

explode(x,y){
for(let i=0;i<20;i++){
this.list.push({
x:x,
y:y,
vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,
life:30
});
}
}

update(){
this.list.forEach((p,i)=>{
p.x+=p.vx;
p.y+=p.vy;
p.life--;
if(p.life<=0) this.list.splice(i,1);
});
}

draw(ctx){
ctx.fillStyle="#00eaff";
this.list.forEach(p=>{
ctx.fillRect(p.x,p.y,3,3);
});
}
}

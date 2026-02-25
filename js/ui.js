export default class UI{
constructor(){
this.pauseBtn=document.getElementById("pauseBtn");
this.restartBtn=document.getElementById("restartBtn");
this.paused=false;

this.pauseBtn.onclick=()=>this.paused=!this.paused;
this.restartBtn.onclick=()=>location.reload();
}

draw(ctx,score,level){
ctx.fillStyle="#fff";
ctx.font="14px Arial";
ctx.fillText("Score: "+score,10,20);
ctx.fillText("Level: "+level,10,40);
}
}

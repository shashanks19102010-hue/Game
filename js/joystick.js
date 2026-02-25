import {clamp} from "./utils.js";

export default class Joystick{
constructor(player){
this.player=player;
this.joy=document.getElementById("joystick");
this.stick=document.getElementById("stick");

this.init();
}

init(){
this.joy.addEventListener("touchmove",(e)=>{
let rect=this.joy.getBoundingClientRect();
let x=e.touches[0].clientX-rect.left-55;
x=clamp(x,-30,30);
this.stick.style.left=x+30+"px";
this.player.vx=x*0.15;
});

this.joy.addEventListener("touchend",()=>{
this.stick.style.left="30px";
this.player.vx=0;
});
}
}

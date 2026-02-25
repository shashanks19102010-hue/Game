import Player from "./player.js";
import Enemies from "./enemies.js";
import Particles from "./particles.js";
import Boss from "./boss.js";
import UI from "./ui.js";
import Engine from "./engine.js";
import Joystick from "./joystick.js";

const canvas=document.getElementById("game");
canvas.width=360;
canvas.height=640;
const ctx=canvas.getContext("2d");

const player=new Player();
const enemies=new Enemies();
const particles=new Particles();
const boss=new Boss();
const ui=new UI();

new Joystick(player);

const engine=new Engine(player,enemies,particles,boss,ui);

setInterval(()=>enemies.spawn(engine.level),1500);

function gameLoop(){
engine.update();
engine.draw(ctx);
requestAnimationFrame(gameLoop);
}

gameLoop();

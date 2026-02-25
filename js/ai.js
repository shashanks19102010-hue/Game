export function enemyAI(enemy,player){
enemy.step++;

if(enemy.type==="zigzag"){
enemy.y=560+Math.sin(enemy.step*0.1)*20;
}

if(enemy.type==="jumper" && enemy.step%90===0){
enemy.vy=-14;
}

if(enemy.type==="hunter"){
if(player.x>enemy.x) enemy.vx+=0.02;
}
}

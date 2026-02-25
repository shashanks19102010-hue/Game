export function clamp(val,min,max){
return Math.max(min,Math.min(max,val));
}

export function rectCollision(a,b){
return a.x<b.x+b.w &&
a.x+a.w>b.x &&
a.y<b.y+b.h &&
a.y+a.h>b.y;
}

export function random(min,max){
return Math.random()*(max-min)+min;
}

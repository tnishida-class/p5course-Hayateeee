// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==0){fill(255, 255, 255)}
      else{fill(128, 128, 128)}
    rect(size*i, size*j, size, size);
{
  if(j<3 & (i+j)%2==1){fill(255, 0, 0);}
else if(j<5){noFill();}
else if(j<8 & (i+j)%2==1){fill(0,0,0)}
else{noFill()}
  circle(size*(i+1/2), size*(j+1/2), size*4/5);
}
}
}
}

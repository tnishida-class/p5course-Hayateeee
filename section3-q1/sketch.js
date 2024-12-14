// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  noStroke();
  background(255, 192, 255);
  count = 3+(count + 1) % cycle;
  let size=count;

  ellipse(width / 2, height / 2, size);
  fill(234, 0, 0);
  if(keyIsDown(LEFT_ARROW)){ count -= 5; } //左キーで減速
  if(keyIsDown(RIGHT_ARROW)){ count += 5; }//右キーで加速
  //if(keyIsDown(" ".charCodeAt(0))){ count-= 10; }
}

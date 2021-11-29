let ax, ay, ar; // マウスに合わせて動く円に使用する変数
let bx, by, br;
const limit = 21; // Time limit in seconds
let startTime;
let state;
let vx, vy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  textSize(52);
  state = 0;
  ax = 10, ay = 10, ar = 30;
  bx = 2/width, by = 2/height, br = 300
  vx=20, vy=20;
}

function draw() {
  background(0 ,128, 255);
  ax = mouseX, ay = mouseY;
  push();
  fill(0, 255, 255);
  ellipse(ax, ay, ar);
  pop();
  if (state == 0) {
    showInfo("マウスを操作して動く円をよけ続けてください\n[E]キー…「Easy」モード\n　[H]キー…「Hard」モード\n(速度2倍)\n[L]キー…「Lunatic」モード\n（大きさ2倍、速度2倍）\nキーを押すと同時にスタートします\n20秒間よけきれたらクリア！！");
  } else if (state == 1) {//イージーモード
    push();
    fill(0, 255, 100);
    ellipse(bx, by, br);
    pop();
    bx += vx;
    by += vy;
    Bounce();
    CollisionDetect();
    TimeCount();
  }
  else if (state == 2) {//ハードモード
    push();
    fill(255, 0, 0);
    ellipse(bx, by, br);
    pop();
    bx += vx*2;
    by += vy*2;

    Bounce();
    CollisionDetect();
    TimeCount();
  }
  else if (state == 5) {//ルナティックモード
    push();
    fill(128, 0, 128);
    ellipse(bx, by, br*2);
    pop();
    bx += vx*2;
    by += vy*2;
    Bounce();
    CollisionDetect();
    TimeCount();
  }
  else if (state == 3) {
    showInfo('クリア！\nスペースキーで再チャレンジ');
    bx = 2/width, by = 2/height, br = 200
  }
  else if (state == 4) {
    showInfo('残念！\nスペースキーで再チャレンジ');
    bx = 2/width, by = 2/height, br = 200
  }

}
// 当たり判定
function CollisionDetect() {
  const d = dist(ax, ay, bx, by);   // ２つの円の中心間の距離を計る(d)
  if (d < (ar + br)/2) { // この距離が２つの円の半径の合計より小さいなら当たり判定
    state = 4;
  }
}
//跳ね返り
function Bounce(){
  if(bx < 0 || bx > width){ vx = -1 * vx; }
  if(by < 0 || by > height){ vy = -1 * vy; }

  // x座標, y座標を画面内に戻しておく
  bx = constrain(bx, 0, width);
  by = constrain(by, 0, height);
}

//残り時間
function TimeCount(){
  let ellapsedTime = (millis() - startTime) / 1000;
  if (ellapsedTime > limit - 1) {
    state = 3;
  }
  else {
    let remainingTime = limit - ellapsedTime;
    text(floor(remainingTime), width / 2, height / 20);
  }
}

//中央にテキスト表示
function showInfo(txt) {
  text(txt, width/2, height/2);
}

function keyPressed(){
  if(key == " "){　// スペースキーを押したらリセット
    state = 0;
    bx = 2/width, by = 2/height, br = 300}
    if(key == "e" && state == 0){　//nキーを押すとノーマルモード
      state = 1;
      startTime = millis();
    }
    if(key == "h" && state == 0){　//hキーを押すとハードモード
      state = 2;
      startTime = millis();}
      if(key == "l" && state == 0){　//lキーを押すとルナティックモード
        state = 5;
        startTime = millis();}

      }

      function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
      }

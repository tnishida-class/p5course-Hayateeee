function setup() {
createCanvas(100,100);
 background(196);
 for(let i = 0; i < 9; i++){
  if(i>5){strokeWeight(2)}
  else if(i < 3){strokeWeight(4)}
  else{strokeWeight(6)}
  let x = i * 10 + 10;
  line(x,0, x, 100);}

  

// テキスト「繰り返し」
//function setup() {
  //createCanvas(100,100);
//  fill(0);
  //let x = 0;
//  while(x < 100){ // 四角を描く座標が描画範囲内であれば続ける
  //  rect(x, x, 20, 20);
  //  x = x + 20; // 繰り返し1回ごとに場所を動かす

      // 条件2 が false のときにする処理 (条件1の結果に関わらず)
  //  }
//  }
//}

 //for 文を使うと、同じプログラムを以下のように書くことができます


}

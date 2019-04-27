var alpha = 0;
var beta = 0;
var gamma = 0;
window.addEventListener("deviceorientation", function(event) {
    alpha = event.alpha;
    beta = event.beta;
    gamma = event.gamma;
}, false);

// 指定時間ごとに繰り返し実行される setInterval(実行する内容, 間隔[ms]) タイマーを設定
var timer = window.setInterval(() => {
    displayData();      // displayData 関数を実行
}, 33); // 33msごとに（1秒間に約30回）
 
// データを表示する displayData 関数
function displayData() {
    var txt = document.getElementById("txt");   // データを表示するdiv要素の取得
    txt.innerHTML = "alpha": " + alpha + "<br>"         // x軸の値
                  + "beta: " + beta + "<br>"         // y軸の値
                  + "gamma: " + gamma;                 // z軸の値
}
var hands = ["✊", "✌️", "🖐️"];

// ページ読み込み時
// CPU宣言
var messageRandom = Math.floor(Math.random() * 3);

var cpuMessage = hands[messageRandom];

// 宣言表示
$(".text").text(
"CPU「私は " + cpuMessage + " を出します」"
);

// ボタンクリック
$(".curd").on("click", function () {

var userHand = $(this).data("hand");

var randomPercent = Math.floor(Math.random() * 100);

var cpuHand;

// 50%本当
if (randomPercent < 50) {

    cpuHand = cpuMessage;

} else {

    // 嘘
    do {

    cpuHand = hands[Math.floor(Math.random() * 3)];

    } while (cpuHand === cpuMessage);

}

$(".opponent-text").html(cpuHand)
$(".opponent-text").css("font-size","50px")

// 勝敗判定
if (userHand === cpuHand) {

    battleMessage = "結果：あいこ";

} else if (

    userHand === "✊" && cpuHand === "✌️" ||
    userHand === "✌️" && cpuHand === "🖐️" ||
    userHand === "🖐️" && cpuHand === "✊"

) {

    battleMessage = "結果：あなたの勝ち";

} else {

    battleMessage = "結果：あなたの負け";

}

// 嘘判定
if (cpuMessage === cpuHand) {

    lieMessage = "";

} else {

    lieMessage = "CPUは嘘をついた！";

}

$(".text").text(
  battleMessage + "\n" + lieMessage
);

});
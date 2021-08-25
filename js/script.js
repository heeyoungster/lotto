var $lotto = [];

for(i=0; i<6; i++){
    var $num = Math.ceil(Math.random() * 45);
    if($lotto.indexOf($num) == -1){
        $lotto.push("<span>" + $num + "</span>");
    }
    else{
        continue;
    }
}
console.log($lotto);
var $lotto2 = $lotto.join();
console.log($lotto2);
var lottoNum = $lotto2.replace(/,/g,"");
console.log(lottoNum);
document.write("<div class='lotto'>" + lottoNum + "</div><p>새로운 번호를 보려면 새로고침 하세요</p>");
/*
var $color = [
    ["background: #0ed;color: #333;"],
    ["background: #e6a;color: #fff;"],
    ["background: #c3e; color: #fff;"],
    ["background: #df3;color: #333;"],
    ["background: #37f;color: #fff;"],
    ["background: #7e6;color: #333;"],
]
var $c_frame = document.querySelector("body");
var $c_box = "";
console.log($color.length);

for(j=0; j<$color.length; j++){
    $c_box += `
    <span style="`+$color[j]+`"></span>
    `;
}
console.log($c_box);
$c_frame.innerHTML = $c_box;
*/


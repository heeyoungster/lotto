var lotto_cover = document.querySelector("body .case");
var lotto_ball = "";
var lotto = [];
var num;
while(lotto.length < 6){
    num = Math.floor(Math.random() * 46) + 1; 
    console.log(num);
    if(lotto.indexOf(num) == -1){
        lotto.push(num);
    }
    console.log(lotto);
}
var lotto_arr = lotto.sort(function(a, b){
    return a - b;
});
console.log(lotto_arr);
console.log(lotto_arr.length);

for(i=0; i <lotto_arr.length; i++){
    lotto_ball += `
    <span>`+lotto_arr[i]+`</span>
    `
}
console.log(lotto_cover);
lotto_cover.innerHTML = lotto_ball;

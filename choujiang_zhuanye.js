var thousand = ["14电信","14计科","14软工","14统计","14网工","14信科","14应数"];
var hunred = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var a = 1;
function ac1() {
    var n = member[Math.floor(Math.random() * member.length + 1) - 1];

    $("h1#text1").text(n);
}
function ac2() {
    $("h1#text2").text(randomNum(3100000000, 3199999999));
}
function ac3() {
    var n = Math.floor(Math.random() * ten.length + 1) - 1;
    $("h1#text3").text(n);
}
function ac4() {
    var n = Math.floor(Math.random() * ten.length + 1) - 1;
    $("h1#text4").text(n);
}
var t1, t2, t3, t4;
var cnt = 0;
var m, m1, m2, m3, m4;
var b_begin=1;
//生成范围随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
            break;
        default:
            return 0;
            break;
    }
}

$(document).ready(function () {
    console.log(member.length);
    
    //检查member数组是否有重复
    // var flag = 0;
    // for(var i = 0 ; i < member.length ; i++){
    //     for(var j = i+1 ; j < member.length ; j++){
    //         if(member[i] == member[j]){
    //             alert("Member 数组有重复");
    //             flag=1;
    //         }
    //     }
    // }
    // if(flag == 0)
    //     alert("Member 数组没有重复");

        
    $(document).keydown(function (event) {
        //判断当event.keyCode 为13时（即回车键）
        //判断当event.keyCode 为32时（即空格键）
        //Delete为强制重置
        if (event.keyCode == 13 && b_begin==1) {
            cnt = 0;
            // $("div#text5").hide();
            t1 = setInterval(ac1, 100);
            t2 = setInterval(ac2, 100);
            m = randomNum(1,member.length-1);
            m1 = member[m];
            console.log("m:%s", member[m]);
            b_begin=0;
        } else if (event.keyCode == 32 && b_begin==0) {
            if (cnt == 0) {
                clearInterval(t1);
                $("h1#text1").text(m1);
                b_begin=1;
            }
            cnt++;
            if (cnt == 1)
                cnt = 0;
        }else if(event.keyCode==46){
            clearInterval(t1);
            $("h1#text1").text("-");
            b_begin = 1;
        }
    });
    // $("a#btn1").click(function () {
    //     cnt = 0;
    //     t1 = setInterval(ac1, 100);
    //     t2 = setInterval(ac2, 100);
    //     t3 = setInterval(ac3, 100);
    //     t4 = setInterval(ac4, 100);
    // }),
    //     $("a#btn1e").click(function () {
    //         if (cnt == 0)
    //             clearInterval(t1);
    //         if (cnt == 1)
    //             clearInterval(t2);
    //         if (cnt == 2)
    //             clearInterval(t3);
    //         if (cnt == 3)
    //             clearInterval(t4);
    //         cnt++;
    //         if (cnt == 4)
    //             cnt = 0;
    //     })
});

var thousand = [0, 1, 2];
var hunred = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var a = 1;
function ac1() {
    var n = member[Math.floor(Math.random() * member.length + 1) - 1];
    $("h1#text1").text(n);
}
function ac2() {
    var n = Math.floor(Math.random() * hunred.length + 1) - 1;
    $("h1#text2").text(n);
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
    $(document).keydown(function (event) {
        //判断当event.keyCode 为13时（即回车键）
        //判断当event.keyCode 为32时（即空格键）
        //Delete为强制重置
        if (event.keyCode == 13 && b_begin==1) {
            cnt = 0;
            // $("div#text5").hide();
            t1 = setInterval(ac1, 100);
            t2 = setInterval(ac2, 100);
            t3 = setInterval(ac3, 100);
            t4 = setInterval(ac4, 100);
            m = randomNum(1,2300);
            m1 = (m - m % 1000) / 1000;
            m2 = ((m - m1 * 1000) - (m - m1 * 1000) % 100) / 100;
            m3 = ((m - m1 * 1000 - m2 * 100) - (m - m1 * 1000 - m2 * 100) % 10) / 10;
            m4 = (m - m1 * 1000 - m2 * 100 - m3 * 10);
            console.log("m:%d;m1:%d;m2:%d;m3:%d;m4:%d", m, m1, m2, m3, m4);
            b_begin=0;
        } else if (event.keyCode == 32 && b_begin==0) {
            if (cnt == 0) {
                clearInterval(t1);
                $("h1#text1").text(m1);
            }
            if (cnt == 1) {
                clearInterval(t2);
                $("h1#text2").text(m2);
            }
            if (cnt == 2) {
                clearInterval(t3);
                $("h1#text3").text(m3);
            }
            if (cnt == 3) {
                clearInterval(t4);
                $("h1#text4").text(m4);
                b_begin=1;
            }
            cnt++;
            if (cnt == 4)
                cnt = 0;
        }else if(event.keyCode==46){
            clearInterval(t1);
            clearInterval(t2);
            clearInterval(t3);
            clearInterval(t4);
            $("h1#text1").text("-");
            $("h1#text2").text("-");
            $("h1#text3").text("-");
            $("h1#text4").text("-");
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

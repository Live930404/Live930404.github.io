/**
 * Created by Administrator on 2017/6/7.
 */
window.onload = function () {
    var config = [
        {
            "left": 415,
            "top": 200,
        },
        {
            "left": 330,
            "top": 210,
        },
        {
            "left": 305,
            "top": 223,
        },
        {
            "left": 296,
            "top": 281,
        },
        {
            "left": 361,
            "top": 307,
        },
        {
            "left": 273,
            "top": 327,
        },
        {
            "left": 485,
            "top": 283,
        },
        {
            "left": 485,
            "top": 340,
        },
    ];
    var uu = document.getElementById("uu");
    var lis = uu.children;
    for (var i = 0; i < lis.length; i++) {
        animate(lis[i], config[i]);
    };
}
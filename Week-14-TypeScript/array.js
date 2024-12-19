"use strict";
function fun(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Largest Num is " + max);
}
fun([1, 2, 35, 4, 5, 9]);

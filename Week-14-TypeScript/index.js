"use strict";
function delayedcall(fn) {
    setTimeout(fn, 1000);
}
delayedcall(function () {
    console.log("Run after 1 Second ");
});

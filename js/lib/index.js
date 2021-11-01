"use strict";
/** 获取根节点 */
var rootDom = document.getElementById("root");
var setNode = function (text) {
    if (rootDom) {
        rootDom.innerHTML = text;
    }
};
setNode("哈哈哈哈");

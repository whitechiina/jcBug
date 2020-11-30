// 只需在页面引入这段原生js代码就可以了
(function (doc, win) {
    var docEl = doc.documentElement,
        // 这段是为了获取移动端屏幕是否翻转（手机重力感应等引起屏幕长宽变化之类的）
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 15 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


// resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',  这段是为了获取移动端屏幕是否翻转（手机重力感应等引起屏幕长宽变化之类的）
// 'orientationchange' in window 这个是判断在window对象中是否有orientationchange属性，因为orientationchange会遇到兼容性问题，有的浏览器不支持，所以这边做了判断来决定是用orientationchange还是resize（思路就是用resizeEvt这个变量来控制用哪个，后面只要用resizeEvt这个变量来监听屏幕是否被调整）
// 这里面“？”和“：”是一个if判断。如果问号前面的判断（'orientationchange' in window ）结果为true则执行冒号前的内容结果为'orientationchange'（同时因为在js中等号的优先级低于三目运算符“？："，所以还会在这之后执行赋值，把'orientationchange'赋值给 resizeEvt 变量），如果为false则得到冒号后的 'resize'并赋值给 resizeEvt。

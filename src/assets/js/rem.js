// 这是rem换算px的文件， 大家存一下，适用于各种手机端。
// 引入这个js文件。。。打开， 可以看到最后又两个750，   这750就是设计稿的宽度，以后工作了 UI会告诉你设计稿的宽是多少， 然后这里就改多少，     然后在html里引入这个js文件，  你再写css的时候直接除100，    假如字体大小是16PX，  那就写成0.16rem。。   假如盒子的宽是150px，就写成1.5rem，一般情况手机端的设计稿宽都是750

(function (designWidth, maxWidth) {
    var doc = document,
        win = window;
    var docEl = doc.documentElement;
    var metaEl,
        metaElCon;
    var styleText,
        remStyle = document.createElement("style");
    var tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (!maxWidth) {
            maxWidth = 540;
        };
        if (width > maxWidth) {
            width = maxWidth;
        }
        var rem = width * 100 / designWidth;
        remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
    }

    
    metaEl = doc.querySelector('meta[name="viewport"]');
    metaElCon = "width=device-width,initial-scale=1,maximum-scale=1.0,user-scalable=no,viewport-fit=cover";
    if (metaEl) {
        metaEl.setAttribute("content", metaElCon);
    } else {
        metaEl = doc.createElement("meta");
        metaEl.setAttribute("name", "viewport");
        metaEl.setAttribute("content", metaElCon);
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement("div");
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
            wrap = null;
        }
    }

    
    refreshRem();

    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        doc.write(wrap.innerHTML);
        wrap = null;
    }

    win.addEventListener("resize", function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);

    win.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === "complete") {
        doc.body.style.fontSize = "16px";
    } else {
        doc.addEventListener("DOMContentLoaded", function (e) {
            doc.body.style.fontSize = "16px";
        }, false);
    }
})(750, 750);
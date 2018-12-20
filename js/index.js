function getElementById(id) {
    return document.getElementById(id);
};

// 设置蒙层
function mask(params) {
    var mask = getElementById('mask');

    if (params.length === 0) {
        mask.style.display = 'none';
        return;
    }

    var {id, desc} = params[0];

    /****************   获取要cover的元素基本信息   ****************/
    var ele = getElementById(id);
    var offsetWidth = ele.offsetWidth;
    var offsetHeight = ele.offsetHeight;
    var offsetLeft = ele.offsetLeft;
    var offsetTop = ele.offsetTop;

    /****************   获取屏幕大小，包含滚动区域   ****************/
    var scrollWidth = document.body.scrollWidth;
    var scrollHeight = document.body.scrollHeight;

    /****************   为Mask设置css   ****************/
    mask.style.width = scrollWidth + 'px';
    mask.style.height = scrollHeight + 'px';
    mask.style.borderColor = "rgba(0, 0, 0, 0.75)";
    mask.style.borderStyle = 'solid';
    mask.style.borderLeftWidth = offsetLeft - 5 + 'px';
    mask.style.borderRightWidth = (scrollWidth - offsetWidth - offsetLeft - 5) + 'px';
    mask.style.borderTopWidth = offsetTop - 5 + 'px';
    mask.style.borderBottomWidth = (scrollHeight - offsetHeight - offsetTop - 5) + 'px';
    mask.style.position = 'absolute';
    mask.style.left = 0;
    mask.style.top = 0;

    /****************   为Mask设置desc   ****************/
    var maskDesc = getElementById('mask-desc');
    maskDesc.innerHTML = desc;

    /****************   绑定next事件   ****************/
    var nextBtn = getElementById('mask-next');
    (function (mask) {
        nextBtn.onclick = function () {
            params.shift();
            mask(params);
        };
    })(arguments.callee);
};

mask([
    {
        id: 'first-step',
        desc: '我是第一步的说明'
    }, {
        id: 'second-step',
        desc: '我是第二步的说明'
    }, {
        id: 'third-step',
        desc: '我是第三步的说明'
    }
]);
import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            contents: [
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
            ]
        }
    }

getElementById(id) {
    return document.getElementById(id);
};

// 设置蒙层
// mask(params) {
//     const  mask = this.refs.mask

//     if (params.length === 0) {
//         mask.style.display = 'none';
//         return;
//     }

//     const {id, desc} = params[0];

//     /****************   获取要cover的元素基本信息   ****************/
//     const ele = getElementById(id);
//     const offsetWidth = ele.offsetWidth;
//     const offsetHeight = ele.offsetHeight;
//     const offsetLeft = ele.offsetLeft;
//     const offsetTop = ele.offsetTop;

//     /****************   获取屏幕大小，包含滚动区域   ****************/
//     const scrollWidth = document.body.scrollWidth;
//     const scrollHeight = document.body.scrollHeight;

//     /****************   为Mask设置css   ****************/
//     mask.style.width = scrollWidth + 'px';
//     mask.style.height = scrollHeight + 'px';
//     mask.style.borderColor = "rgba(0, 0, 0, 0.75)";
//     mask.style.borderStyle = 'solid';
//     mask.style.borderLeftWidth = offsetLeft - 5 + 'px';
//     mask.style.borderRightWidth = (scrollWidth - offsetWidth - offsetLeft - 5) + 'px';
//     mask.style.borderTopWidth = offsetTop - 5 + 'px';
//     mask.style.borderBottomWidth = (scrollHeight - offsetHeight - offsetTop - 5) + 'px';
//     mask.style.position = 'absolute';
//     mask.style.left = 0;
//     mask.style.top = 0;

//     /****************   为Mask设置desc   ****************/
//     const maskDesc = getElementById('mask-desc');
//     maskDesc.innerHTML = desc;

//     /****************   绑定next事件   ****************/
//     const nextBtn = getElementById('mask-next');
//     (function (mask) {
//         nextBtn.onclick = function () {
//             params.shift();
//             mask(params);
//         };
//     })(arguments.callee);
// };

  render() {
    return (
      <div>
        <div id="first-step" class="steps">第一步</div>
        <div id="second-step" class="steps">第二步</div>
        <div id="third-step" class="steps">第三步</div>
        <div id="mask" ref="mask">
            <div class="mask-tip">
                <span id="mask-desc" class="mask-tip-desc"></span>
                <button id="mask-next" class="mask-tip-btn">下一步</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

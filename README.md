# antd-modal-dragable
在蚂蚁金服的antd库的modal组件上，新增可拖动功能，完全复用antd-modal的全部api，支持同时打开多个窗口

  新增以下三个api

  1.dragable

    类型boolean,是否可拖动，默认true,开启此项后，首次位置水平方向不再居中，要手动设置初始位置

  2.limit

    类型boolean,是否限制不能移出屏幕，默认false

  3.autoIndex

    类型boolean,是否自动置顶，点击窗口时此窗口置于最高层，开启此项时，mask会失效
    
- 使用方法
 
    下载库中的Modal.js，放到自己的项目中，此文件依赖antd，如未安装antd，则无法使用该组件

- 特点
 
    同时打开多个窗口时，点击窗口或者拖动窗口会将此窗口置顶，新打开的窗口会自动置顶，窗口顺序按照拖动的先后顺序排列，此项只对autoIndex开启时有效，如果不开启autoIndex，下层的窗口会被上层的遮盖，无法操作。

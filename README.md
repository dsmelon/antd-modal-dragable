# antd-modal-dragable
在蚂蚁金服的antd库的modal组件上，新增可拖动功能，完全复用antd-modal的全部api

  新增以下三个api

  1.dragable

    类型boolean,是否可拖动，默认true

  2.limit

    类型boolean,是否限制不能移出屏幕，默认true

  3.autoIndex

    类型boolean,是否自动置顶，再点击窗口时此窗口置于最高层，开启此项是，mask会失效
    
- 使用方法
 
    下载库中的Modal.js,放到自己的项目中，此文件依赖antd，如未安装antd，则无法使用该组件

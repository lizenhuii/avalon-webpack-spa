webpackJsonp([3,9],{

/***/ 42:
/***/ function(module, exports) {

	module.exports = "<div ms-controller=\"about\" class=\"about-panel\">\n这里是关于页面\n    <h1>这里演示对话框和验证组件</h1>\n    <button class=\"pure-button-primary\" ms-click=\"show('testdialog')\">点击打开对话框</button>\n    <div ms-widget=\"dialog,testdialog,$OptTestDialog\">\n        <form class=\"pure-form pure-form-stacked\" ms-widget=\"validation,validationVM\">\n            <ul>\n                <li>\n                    <label>姓名：</label><input type=\"text\" ms-duplex-required=\"name\" placeholder=\"请输入姓名\">\n                </li>\n                <li>\n                    <label>身份证号：</label><input type=\"text\" ms-duplex-norequired-id=\"idcard\" placeholder=\"请输入身份证号\">\n                </li>\n                <li>\n                    <label>手机号：</label><input type=\"text\" placeholder=\"请输入手机号码\" ms-duplex-phone-required=\"phone\" data-duplex-changed=\"change\">\n                </li>\n            </ul>\n        </form>\n    </div>\n</div>"

/***/ }

});
//# sourceMappingURL=3.chunk.2d9aa442.js.map
//webpack supports amd,cmd,es6 
require('./world')
// 必须添加！以及loader
require('style-loader!css-loader!./style.css')
//上那的require也可以在运行webpack时执行
// webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' 也可以完成绑定

//--progress --display-modules --display-reasons等

function hello(str) {
	alert(str);
}

hello('hello world')

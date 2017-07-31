//转义字符
var s = "you\'re right, it can\'t be a quote"
//console.log(s)

//RegExp
var text = "testing: 1, 2, 3"
var pattern = /\d+/g
//console.log(pattern.test(text))
//console.log(text.search(pattern))
text.match(pattern)
text.replace(pattern,"#")
text.split(/\D+/)

//Boolean !== // same with java
var a = 1, b = 2
if (a !== 4){
	b = b + 1
	//console.log(b)
}
else if(a == 4){
	a = a + 1
	//console.log(a)
}
else if(a >= 1 && b >= 1)
	console.log("True")
else if(!(a == 0)){
}

/*
null and undefined
javascripts 使用 null 和 undefined 来表示空值
undefined: 变量没有初始化
*/

/*
object types: object, array and function
global object(全局对象) 
var global = this
*/

/*unchangable original value and changable object reference type*/
var h = "yanghaochuan"
//console.log(h.toUpperCase())
//console.log(h)

var arr = ["yanghaochuan","Macheal","Jacky"]
b = arr
b[0] = 'YangHaochuan'
//console.log(b)
//console.log(arr)

/*types transform*/
var x = 1
var type_1= 10 + "objects"
var type_2 = "7" * "8"
var type_3 = 1 - "x"
var type_4 = type_3 + "objects"
//console.log(type_4)

/*explicit type conversion*/
var n = 17
binary_string = n.toString(2);
octal_string = "o" + n.toString(8);
hex_string = "ox" + n.toString(16);
// console.log(binary_string)
// console.log(octal_string)
// console.log(hex_string)

var n =123456.789
// console.log(n.toFixed(0))
// console.log(n.toFixed(2))
// console.log(n.toFixed(5))

// console.log(n.toExponential(1))
// console.log(n.toExponential(3))

// console.log(n.toPrecision(1))
// console.log(n.toPrecision(4))
// console.log(n.toPrecision(7))
// console.log(n.toPrecision(11))

// console.log(parseInt("3 blind mice"))
// console.log(parseFloat(" 3.14 meters"))
// console.log(parseInt("-12.34"))
// console.log(parseInt("0.1"))
// //不可以用 . 和 $ 开头
// console.log(parseInt(".1"))
// console.log(parseInt("$72.66"))


/*object to original value*/
var d = new Date(2017,5,16)
// console.log(d.toString())
// console.log(d.valueOf())
// console.log((function(x) { f(x);}).toString())
// console.log(/\d+/g.toString())

/*声明提前 hoisting */
/*javascripts does not have block scope but function scope*/
var scope = "global"
function f() {
	//console.log(scope)
	var scope = "local"
	//console.log(scope)
}
//run function
f()







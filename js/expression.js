var matrix = [[1,2,3],[4,5,6],[7,8,9]]
var sparseArray = [1,,,,5]
//console.log(sparseArray[0])
var p = {x:2.3,y:{z:1.66}}
//console.log(p.y.z)
var side = 1;
function multiply(a, b){
  return a * b
}

//console.log(multiply(1,2))

var t1 = eval("3 + 2")

var geval = eval;
var x = "global";
var y = "global";
function f(){
	var x = "local";
	eval("x += 'changed';");
	return x;
}
function g(){
	var y = "local";
	geval("y += 'changed';");
	return y;
}
//console.log(f(),x);
//console.log(g(),y);

//?:
x > 0 ? x:-x
//typeof return a type string
var value = "Yanghaochuan";
console.log((typeof(value) == "string" ? "Yes " + value:"No " + value));
 
 
// let o = {x:1, y:1};
// console.log(o.hasOwnProperty("x"));

// console.log(o.hasOwnProperty("z"));

// o = {x:1,y:{z:[false,null,""]}};

// let s = JSON.stringify(o);

// let p = JSON.parse(s);

// let o1 = Object.create(o);

// o1.data = "yhc";
// o1.arr = ["",2,null,""];
// console.log(o1.valueOf());
// console.log(o1.propertyIsEnumerable("y"));


//array
// let a = new Array();
// a[0] = 1;
// a[1] = "ast";
// a[3] = 1;
// console.log(a + " \n" + a.length);

// a.push("push");
// //a.pop();
// //a.shift();
// a.unshift("push");


// for(let i in a){
//     console.log(a[i]);
// }

// let table = new Array(10);

// for(let i = 0;i<table.length;i++){
//     table[i] = new Array(10);
// }

// for(let row = 0;row < table.length;row++){
//     for(let col = 0;col< table[row].length;col++){
//         table[row][col] = row * col;
//     }
// }
// //console.log(table[9].reverse().join());

// let temp = table[9];

// let sum = 0;
// temp.forEach((value) => {
//     sum += value;
// });

// console.log(sum);

// let b = temp.map((v) => {
//     return v *= 1.5;
// });

// console.log(b);

// small_value = b.filter((value)=>{
//     return value < 60;
// });

// console.log(small_value);

// let res = temp.reduce((x,y)=>{
//     //console.log(x+ " " + y + "\n");
//     return x+y;
// });

// console.log(res);

// let t1 = [2,3,4];
// let res1 = t1.reduceRight((x,y)=>{
//     //console.log(x + " " + y +"\n");
//     return Math.pow(y,x);
// });

// let objects =[{x:1},{y:2},{z:3}];

// function extend(o,p){
//     for(let prop in p){
//         o[prop] = p[prop];
//     }
//     return o;
// }
// function union(o,p){
//     return extend(extend({},o),p);
// }
// let merged = objects.reduceRight(union);

// console.log(merged);

//function -- clos

// function constfuncs(){
//     var funcs = [];
//     var a = "yhc";
//     for(var i=0;i<10;i++){
//         funcs[i] = function(){return i;}
//     }
//     return funcs;
// }

// let funcs = constfuncs();
//console.log(funcs[6]());

// var g = "global";

// var ob = {
//     v : "yhc",
//     consttest : function(){
//         var l = "local";
//         var self = this;
//         console.log(g);
//         function fun1(){
            
//             console.log(this.v);
//         };
//         return fun1;
//     }
// }

// ob.consttest()();
// array_of_number = [1,2,3,56,43,2,43,45,24,45,2342];
// console.log(Math.max.apply(Math,array_of_number));

//this
// var foo = {x:10};
// var bar = {
//     x : 20,
//     test: function(){
//         console.log(this === foo);
//         console.log(this.x);
//     }
// }

// bar.test();

// foo.test = bar.test;
// foo.test();

// function foo(){
//     //console.log(this);
// }

// // console.log(foo === foo.prototype.constructor);
// // console.log(foo.prototype.constructor);
// var foo = {
//     bar: function(){
//         console.log(this === foo);
//     }
// }

// var exampleFunc = foo.bar;

//console.log(exampleFunc === foo.bar)
//exampleFunc();

// let decimalDigits = 0, tax = 5;

// let calculator = function(decimalDigits,tax){
//     this.decimalDigits = decimalDigits;
//     this.tax = tax;
// };

// calculator.prototype = {
//     add: function(x,y){return x + y;},
//     subtract: function(x,y){return x - y}
// };

// let o1 = new calculator(6,6);
// let o2 = new calculator();
// let res = o2["add"](decimalDigits,tax);
// console.log(res);

// calculator.prototype = function(){
//     add = function(x,y){
//         return x + y;
//     };
//     substract = function(x,y){
//         return x - y;
//     };
//     return {
//         add: add,
//         substract: substract
//     }
// }();

// let o1 = new calculator(6,6);
// console.log(o1.add(7,9));


// let Calcu = function(){
//     this.decimalDigits = 2;
//     this.tax = 6;
// }

// Calcu.prototype.add = function(x,y){
//     return x + y;
// };

// Calcu.prototype.substract = function(x,y){
//     return x - y;
// }

// let o3 = new Calcu();
// console.log(o3.add(o3.decimalDigits,2));

// let child = function(){
//     this.val = 5;
// }

// child.prototype = Calcu.prototype;

// let ctest = new child();
// ctest.tax = 6;

// console.log(ctest.tax);


// Calcu.prototype.add = function(x,y){
//     return x + y + this.val;
// }

// console.log(ctest.add(6,6));

// var foo = {
//     hasOwnProperty: function() {
//         return false;
//     },
//     bar: 'Here be dragons'
// };

// console.log(foo.hasOwnProperty('bar')); // 总是返回 false

// // 使用{}对象的 hasOwnProperty，并将其上下为设置为foo
// console.log(Object.hasOwnProperty.call(foo, 'bar')); // true


// Object.prototype.bar = 1;

// var foo = {moo: 2};
// // for(let i in foo){
// //     if(foo.hasOwnProperty(i)){
// //         console.log(i);
// //     }
// // }

// for(let i in foo){
//     console.log(i);
// }


// var global = this;
// var a = 10;
 
// function foo() {}
 
// console(foo.__parent__); // global
 
// var VO = foo.__parent__;
 
// console.log(VO.a); // 10
//console.log(VO === global); // true

// var x = 10, y = 10;

// with ({x: 20,y:20}) {

//  var x = 30, y = 30;

//  console.log(x); // 30
//  console.log(y); // 30
// }

// console.log(x); // 10
// console.log(y); // 30

//encloser


//RegExp and String 
// exec & test | match replace ..

console.log(/^[1-9][0-9]*$|^[1-9][0-9]*\.[0-9]$|^0\.[0-9]$/.test(1.2));

console.log(/^[0-9]+(.[0-9]{2})?$/.test(1.221));

console.log(/^1[34578]\d{9}$/.exec("13611778887"));

let str = "13611778887";
console.log(str.match(/^1[34578]\d{9}$/));

//javascript web develop
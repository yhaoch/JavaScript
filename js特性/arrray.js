//js 

a = [1,2];
b = new Array(3);

b[0] = 'y';
b[1] = 'h';
b[2] = 'c';
b[3] = 'g';
console.log(a.length);
console.log(b.length);

a.length = 1;
console.log(a);
Object.defineProperty(a,"length",{writable: false});
a.length = 0;
var c = [1,2,3];
c.join();
console.log(c);
var d = new Array(10);
ans = d.join('-');
console.log(ans);

var e = [22,3,44,66,21,432]
var e1 = e.sort();
console.log(e1);
var e2 = e.sort((a,b) => {return a - b});
console.log(e2);
e3 = [1,[2,3],[4,[5,6,[1,2],7],8],9];
console.log(e3.toString());


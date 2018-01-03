function fruits (){}


fruits.prototype = {
    color: "red",
    say: function(){
        console.log("My color is " + this.color);
    }
}

let apple = new fruits();

apple.say();

let orange = {
    color: "yellow"
};

apple.say.apply(orange);

apple.say.call(orange);

apple.say.bind(orange)();

function log() {
    console.log.apply(console,arguments);
}

log(1);
log(1,2);
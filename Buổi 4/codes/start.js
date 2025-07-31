function Counter1() {
    this.count = 0;
    console.log(this);
}

// Với arrow function:
var Counter2 = () => {
    this.count = 0;
    console.log(this);
}

var X = {
    name: "abc",
    f: function Counter1() {
        this.count = 0;
        console.log(this);
    },
    f1: () => {
        this.count = 0;
        console.log(this);
    }
}

X.f();
X.f1();
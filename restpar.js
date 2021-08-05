var Greet = function (greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
};
console.log(Greet(Greet("Hello", "yahoo", "parshwa", "vora")));

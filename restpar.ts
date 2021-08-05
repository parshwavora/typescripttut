let Greet = (greeting: string, ...names: string[]) => {
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet(Greet("Hello", "yahoo","parshwa", "vora")));
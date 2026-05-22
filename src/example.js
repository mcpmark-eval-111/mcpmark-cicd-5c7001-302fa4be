// Example file with intentional linting errors
var unusedVariable = "this is not used";

function greet(name) {
    console.log("Hello, " + name)
    var anotherUnused = 42
    return "greeting sent"
}

greet("World")

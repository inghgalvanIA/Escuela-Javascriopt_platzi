//local scope es una variable que solo podremos acceder a ella dentro de la estructura que fue declarada

const helloWorld = () => {
    const hello = "Hello world"
    console.log(hello)
};

helloWorld();

var var_Global = "I am global"

const functionScoper = () => {
    var scope = "I am just a local";
    const fun = () => {
        return scope
    }
    console.log(fun())
};

functionScoper();
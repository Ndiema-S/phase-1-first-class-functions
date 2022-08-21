function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function style() { };
}
function returnsAnAnonymousFunction() {
    return function () { }
}



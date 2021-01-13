'use strict';

function sayHello(text) {
    if (text === void 0) { text = 'name'; }
    console.log("hello " + text);
}

module.exports = sayHello;

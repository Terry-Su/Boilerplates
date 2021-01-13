'use strict';

function sayHello() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';
  console.log("hello ".concat(text));
}

module.exports = sayHello;

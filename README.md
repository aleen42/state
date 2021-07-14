## State

A simple implementation of state machines in JavaScript with Generator, which temporarily support under ES6 and above.

### Usage

For example, there is a state machine with end state:

```
         E      ;      L
L: -> 0 ---> 1 ---> 2 ---> 3
      |                    ^
      |        ε           |
      ----------------------
```

We can describe it like the following snippet:

```js
const State = require('@aleen42/state');
const state = new State({
    'E': [0, 1],
    ';': [1, 2],
    'L': [2, 3],
    'ε': [0, 3],
}, /* startState */0, /* endState */3);

state.next(); // => {value: 0, done: false}
state.next('E'); // => {value: 1, done: false}
state.next(';'); // => {value: 2, done: false}
state.next('L'); // => {value: 3, done: true}

state.reset().next(''); // => {value: 0, done: false}
state.next('ε'); // => {value: 0, done: false}
```

### Release History

* ==================== **1.0.0 Initial release** ====================

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://wiki.aleen42.com/contribution.html).

### :scroll: License

[MIT](https://wiki.aleen42.com/MIT.html) © aleen42

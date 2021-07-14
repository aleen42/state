/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *      ================================================================
 *                 More than a coder, More than a designer
 *      ================================================================
 *
 *
 *      - Document: es6.js
 *      - Author: aleen42
 *      - Description: implementation under ES6
 *      - Create Time: Jul 14th, 2021
 *      - Update Time: Jul 14th, 2021
 *
 *
 **********************************************************************/

function* construct(initialState, startState, endState) {
    // the start of state
    let state = startState;
    let action;

    // simple prev checker
    const _next = (prev, val) => state === prev ? val : state;

    for (;;) {
        /**
         * get the initial state, and read "action"
         * passed by `Generator.prototype.next()` each time
         */
        action = yield state;
        state = _next.apply(0, initialState[action]);

        // the end of state
        if (endState && state === endState) return state;
    }
}

class State {
    /**
     * @param {Object} initialState - states of the state machine
     * @param {any}    startState   - the start value of the state machine
     * @param {any}    [endState]   - the end value of the state machine, there is no end state if not provided
     */
    constructor(initialState, startState, endState) {
        this.instance = machine();

        /** @name State#reset */
        this.reset = () => {
            this.instance = machine();
            return this;
        };

        function machine() {
            const m = construct(initialState, startState, endState);
            m.next(); // need to call next at first for initializing states
            return m;
        }
    }

    next(val) {
        return this.instance.next(val);
    }
}

module.exports = State;

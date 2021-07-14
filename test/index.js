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
 *      - Document: index.js
 *      - Author: aleen42
 *      - Description: the main entrance for tests
 *      - Create Time: Jul 14th, 2021
 *      - Update Time: Jul 14th, 2021
 *
 *
 **********************************************************************/

const State = require('../dist/index.js');
require('chai').should();

/**
 *          E      ;      L
 * L: -> 0 ---> 1 ---> 2 ---> 3
 * |                          ^
 * |           ε              |
 * ---------------------------
 */
const state = new State({
    'E': [0, 1],
    ';': [1, 2],
    'L': [2, 3],
    'ε': [0, 3],
}, /* startState */0, /* endState */3);

describe('state machine', () => {
    it('initial state', () => {
        state.next().should.to.deep.equal({value: 0, done: false});
    });

    it('keep state', () => {
        state.next().should.to.deep.equal({value: 0, done: false});
    });

    it('state 1', () => {
        state.next('E').should.to.deep.equal({value: 1, done: false});
    });

    it('state end', () => {
        state.next(';').should.to.deep.equal({value: 2, done: false});
        state.next('L').should.to.deep.equal({value: 3, done: true});
        state.next().should.to.deep.equal({value: void 0, done: true});
    });

    it('reset state', () => {
        state.reset().next().should.to.deep.equal({value: 0, done: false});
        state.next('ε').should.to.deep.equal({value: 3, done: true});
    });
});

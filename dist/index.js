"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _marked = /*#__PURE__*/_regenerator["default"].mark(construct);

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
function construct(initialState, startState, endState) {
  var state, action, _next;

  return _regenerator["default"].wrap(function construct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // the start of state
          state = startState;

          // simple prev checker
          _next = function _next(prev, val) {
            return state === prev ? val : state;
          };

        case 2:
          _context.next = 4;
          return state;

        case 4:
          action = _context.sent;
          state = _next.apply(0, initialState[action]); // the end of state

          if (!(endState && state === endState)) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", state);

        case 8:
          _context.next = 2;
          break;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var State = /*#__PURE__*/function () {
  /**
   * @param {Object} initialState - states of the state machine
   * @param {any}    startState   - the start value of the state machine
   * @param {any}    [endState]   - the end value of the state machine, there is no end state if not provided
   */
  function State(initialState, startState, endState) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, State);
    this.instance = machine();
    /** @name State#reset */

    this.reset = function () {
      _this.instance = machine();
      return _this;
    };

    function machine() {
      var m = construct(initialState, startState, endState);
      m.next(); // need to call next at first for initializing states

      return m;
    }
  }

  (0, _createClass2["default"])(State, [{
    key: "next",
    value: function next(val) {
      return this.instance.next(val);
    }
  }]);
  return State;
}();

module.exports = State;

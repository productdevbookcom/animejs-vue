"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/index.ts
var _animejs = require('animejs'); var _animejs2 = _interopRequireDefault(_animejs);
function arrayAnimations(_anime) {
  const fade = (value) => {
    return _anime({
      targets: value.target,
      delay: _animejs2.default.stagger(100),
      opacity: [0, 1],
      ...value.params
    });
  };
  return {
    fade
  };
}
function useAnimejs() {
  const _anime = (params) => {
    return _animejs2.default.call(void 0, params);
  };
  const array = arrayAnimations(_anime);
  return {
    anime: _anime,
    array
  };
}


exports.useAnimejs = useAnimejs;

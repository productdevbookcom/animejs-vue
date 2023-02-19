// src/index.ts
import animejs from "animejs";
function arrayAnimations(_anime) {
  const fade = (value) => {
    return _anime({
      targets: value.target,
      delay: animejs.stagger(100),
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
    return animejs(params);
  };
  const array = arrayAnimations(_anime);
  return {
    anime: _anime,
    array
  };
}
export {
  useAnimejs
};

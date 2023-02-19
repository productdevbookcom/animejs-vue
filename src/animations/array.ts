import animejs from 'animejs'
import type { AnimeInstance, AnimeParams, Targets } from '../type'

export function arrayAnimations(_anime: (params: AnimeParams) => AnimeInstance) {
  const fade = (value: { target: Targets; params?: AnimeParams }) => {
    return _anime({
      targets: value.target,
      delay: animejs.stagger(100),
      opacity: [0, 1],
      ...value.params,
    })
  }

  const slide = (value: { target: Targets; params?: AnimeParams }) => {
    return _anime({
      targets: value.target,
      delay: animejs.stagger(100, { start: 500 }),
      translateX: [100, 0],
      ...value.params,
    })
  }

  return {
    fade,
    slide,
  }
}

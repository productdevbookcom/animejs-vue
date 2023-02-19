import animejs from 'animejs'
import type { AnimeInstance, AnimeParams, FunctionBasedParameter, StaggerOptions, Targets } from './type'

function arrayAnimations(_anime: (params: AnimeParams) => AnimeInstance) {
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

export function useAnimejs() {
  const _anime = (params: AnimeParams) => {
    return animejs(params)
  }
  const stagger = (value: number | string | ReadonlyArray<number | string>, options?: StaggerOptions): FunctionBasedParameter => {
    return animejs.stagger(value, options)
  }
  const array = arrayAnimations(_anime)

  return {
    anime: _anime,
    array,
    stagger,
  }
}

import type { AnimeInstance, AnimeParams, Targets } from '../type'

export function svgAnimations(_anime: (params: AnimeParams) => AnimeInstance) {
  const draw = (value: { target: Targets; params?: AnimeParams }) => {
    return _anime({
      targets: value.target,
      strokeDashoffset: [_anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true,
      ...value.params,
    })
  }

  return {
    draw,

  }
}

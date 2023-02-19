import animejs from 'animejs'
import type { App } from 'vue'
import { arrayAnimations } from './animations/array'
import type { AnimeInstance, AnimeParams, AnimeTarget, AnimeTimelineInstance, FunctionBasedParameter, StaggerOptions } from './type'

export function useAnimejs() {
  const _anime = (params: AnimeParams): AnimeInstance => {
    return animejs(params)
  }
  const helper = () => {
    const version = (): string => {
      return animejs.version
    }

    const speed = (): number => {
      return animejs.speed
    }

    const running = (): ReadonlyArray<AnimeInstance> => {
      return animejs.running
    }

    function remove(targets: AnimeTarget | ReadonlyArray<AnimeTarget>): void {
      return animejs.remove(targets)
    }

    function get(targets: AnimeTarget, prop: string, unit?: string): string | number {
      return animejs.get(targets, prop, unit)
    }

    function path(path: string | HTMLElement | SVGElement | null, percent?: number): (prop: string) => {
      el: HTMLElement | SVGElement
      property: string
      totalLength: number
    } {
      return animejs.path(path, percent)
    }

    function setDashoffset(el: HTMLElement | SVGElement | null): number {
      return animejs.setDashoffset(el)
    }
    function bezier(x1: number, y1: number, x2: number, y2: number): (t: number) => number {
      return animejs.bezier(x1, y1, x2, y2)
    }
    function stagger(value: number | string | ReadonlyArray<number | string>, options?: StaggerOptions): FunctionBasedParameter {
      return animejs.stagger(value, options)
    }
    function set(targets: AnimeTarget, value: { [AnyAnimatedProperty: string]: any }): void {
      return animejs.set(targets, value)
    }

    return {
      stagger,
      setDashoffset,
      version,
      speed,
      running,
      remove,
      get,
      path,
      bezier,
      set,
    }
  }

  const timeline = () => {
    function timeline(params?: AnimeParams | ReadonlyArray<AnimeInstance>): AnimeTimelineInstance {
      return animejs.timeline(params)
    }
    function random(min: number, max: number): number {
      return animejs.random(min, max)
    }
    return {
      timeline,
      random,
    }
  }

  const animations = {
    array: arrayAnimations(_anime),
  }

  return {
    anime: _anime,
    animations,
    helper: helper(),
    timeline,
  }
}

export const animejsPlugin = {
  install: (app: App, options?: any) => {
    const animejs = useAnimejs()
    app.config.globalProperties.$animejs = animejs

    app.provide('animejs', animejs)

    app.directive('animejs', {
      mounted(el, binding) {
        const { value } = binding
        animejs.anime(value)
      },
    })
  },
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $animejs: ReturnType<typeof useAnimejs>
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $animejs: ReturnType<typeof useAnimejs>
  }
}

import animejs from 'animejs';
import type { AnimeParams, Targets, AnimeInstance } from './type';

function arrayAnimations(_anime: (params: AnimeParams) => AnimeInstance) {
    const fade = (value: { target: Targets, params?: AnimeParams }) => {
        return _anime({
            targets: value.target,
            delay: animejs.stagger(100),
            opacity: [0, 1],
            ...value.params
        });
    }

    return {
        fade
    }
}


export function useAnimejs() {
    const _anime = (params: AnimeParams) => {
        return animejs(params)
    }

    const array = arrayAnimations(_anime);

    return {
        anime: _anime,
        array
    }
}

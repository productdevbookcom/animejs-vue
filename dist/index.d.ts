import animejs from 'animejs';

type FunctionBasedParameter = (element: HTMLElement, index: number, length: number) => number;
type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;
type CustomEasingFunction = (el: HTMLElement, index: number, length: number) => ((time: number) => number);
type AnimeTarget = string | object | HTMLElement | SVGElement | NodeList | null;
type EasingOptions = "linear" | "easeInQuad" | "easeInCubic" | "easeInQuart" | "easeInQuint" | "easeInSine" | "easeInExpo" | "easeInCirc" | "easeInBack" | "easeInElastic" | "easeInBounce" | "easeOutQuad" | "easeOutCubic" | "easeOutQuart" | "easeOutQuint" | "easeOutSine" | "easeOutExpo" | "easeOutCirc" | "easeOutBack" | "easeOutElastic" | "easeOutBounce" | "easeInOutQuad" | "easeInOutCubic" | "easeInOutQuart" | "easeInOutQuint" | "easeInOutSine" | "easeInOutExpo" | "easeInOutCirc" | "easeInOutBack" | "easeInOutElastic" | "easeInOutBounce";
type DirectionOptions = "reverse" | "alternate" | "normal";
interface AnimeCallBack {
    begin?: AnimeCallbackFunction | undefined;
    change?: AnimeCallbackFunction | undefined;
    update?: AnimeCallbackFunction | undefined;
    complete?: AnimeCallbackFunction | undefined;
    loopBegin?: AnimeCallbackFunction | undefined;
    loopComplete?: AnimeCallbackFunction | undefined;
    changeBegin?: AnimeCallbackFunction | undefined;
    changeComplete?: AnimeCallbackFunction | undefined;
}
interface AnimeInstanceParams extends AnimeCallBack {
    loop?: number | boolean | undefined;
    autoplay?: boolean | undefined;
    direction?: DirectionOptions | string | undefined;
}
interface AnimeAnimParams extends AnimeCallBack {
    targets?: AnimeTarget | ReadonlyArray<AnimeTarget> | undefined;
    duration?: number | FunctionBasedParameter | undefined;
    delay?: number | FunctionBasedParameter | undefined;
    endDelay?: number | FunctionBasedParameter | undefined;
    elasticity?: number | FunctionBasedParameter | undefined;
    round?: number | boolean | FunctionBasedParameter | undefined;
    keyframes?: ReadonlyArray<AnimeAnimParams> | undefined;
    easing?: EasingOptions | string | CustomEasingFunction | ((el: HTMLElement) => string) | undefined;
    [AnyAnimatedProperty: string]: any;
}
interface AnimeParams extends AnimeInstanceParams, AnimeAnimParams {
}
interface Animatable {
    id: number;
    target: HTMLElement;
    total: number;
    transforms: object;
}
interface Animation {
    animatable: Animatable;
    currentValue: string;
    delay: number;
    duration: number;
    endDelay: number;
    property: string;
    tweens: ReadonlyArray<object>;
    type: string;
}
interface AnimeInstance extends AnimeCallBack {
    play(): void;
    pause(): void;
    restart(): void;
    reverse(): void;
    seek(time: number): void;
    tick(time: number): void;
    began: boolean;
    paused: boolean;
    completed: boolean;
    finished: Promise<void>;
    autoplay: boolean;
    currentTime: number;
    delay: number;
    direction: string;
    duration: number;
    loop: number | boolean;
    timelineOffset: number;
    progress: number;
    remaining: number;
    reversed: boolean;
    animatables: ReadonlyArray<Animatable>;
    animations: ReadonlyArray<Animation>;
}
type Targets = AnimeTarget | ReadonlyArray<AnimeTarget> | undefined;
declare function anime(params: anime.AnimeParams): anime.AnimeInstance;

declare function useAnimejs(): {
    anime: (params: AnimeParams) => animejs.AnimeInstance;
    array: {
        fade: (value: {
            target: Targets;
            params?: AnimeParams | undefined;
        }) => AnimeInstance;
    };
};

export { useAnimejs };

/// <reference types="vite/client" />

declare global {
  interface Window {
    particlesJS: any;
    lenis?: any;
  }
}

declare module '@studio-freight/lenis' {
  export default class Lenis {
    constructor(options?: any);
    raf(time: number): void;
    scrollTo(target: number | string | HTMLElement, options?: { immediate?: boolean }): void;
    destroy(): void;
  }
}


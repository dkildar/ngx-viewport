export declare class NgxInViewportService {
    private window;
    private document;
    private handlers;
    constructor(window: any, document: any);
    addDetectListener(element: HTMLElement, inViewportHandler: () => void): void;
    removeDetectListener(element: HTMLElement): void;
    private elementOnViewport(element, inViewportHandler);
    private isElementOnViewport(element);
}

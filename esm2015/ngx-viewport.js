import { NgModule, InjectionToken, Inject, Injectable, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const WINDOW = new InjectionToken('WindowToken');
/**
 * @return {?}
 */
function _window() {
    return typeof window !== 'undefined' && window ? window : {};
}
class WindowTokenModule {
}
WindowTokenModule.decorators = [
    { type: NgModule, args: [{
                providers: [{
                        provide: WINDOW,
                        useFactory: _window
                    }]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxInViewportService {
    /**
     * @param {?} window
     * @param {?} document
     */
    constructor(window, document) {
        this.window = window;
        this.document = document;
        this.handlers = [];
    }
    /**
     * @param {?} element
     * @param {?} inViewportHandler
     * @return {?}
     */
    addDetectListener(element, inViewportHandler) {
        if (!this.window || !element || !inViewportHandler)
            return;
        const /** @type {?} */ handler = {
            listener: () => this.elementOnViewport(element, inViewportHandler),
            element: element,
        };
        this.elementOnViewport(element, inViewportHandler); // need when page has been loaded
        this.window.addEventListener('scroll', handler.listener);
        this.handlers.push(handler);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    removeDetectListener(element) {
        const /** @type {?} */ handler = this.handlers.find(h => h.element === element);
        this.window.removeEventListener('scroll', handler.listener);
    }
    /**
     * @param {?} element
     * @param {?} inViewportHandler
     * @return {?}
     */
    elementOnViewport(element, inViewportHandler) {
        if (this.isElementOnViewport(element))
            inViewportHandler();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    isElementOnViewport(element) {
        if (!this.window || !this.document)
            return;
        const /** @type {?} */ clientRect = element.getBoundingClientRect();
        return !!clientRect &&
            clientRect.top <= this.document.body.clientHeight &&
            clientRect.left <= this.document.body.clientWidth &&
            clientRect.bottom >= 0 &&
            clientRect.right >= 0;
    }
}
NgxInViewportService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgxInViewportService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InViewportDirective {
    /**
     * @param {?} inViewportService
     * @param {?} element
     */
    constructor(inViewportService, element) {
        this.inViewportService = inViewportService;
        this.element = element;
        this.inViewportAction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.inViewportService
            .addDetectListener(this.element.nativeElement, () => this.inViewportAction.emit());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.inViewportService.removeDetectListener(this.element.nativeElement);
    }
}
InViewportDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[in-viewport]'
            },] },
];
/** @nocollapse */
InViewportDirective.ctorParameters = () => [
    { type: NgxInViewportService, },
    { type: ElementRef, },
];
InViewportDirective.propDecorators = {
    "inViewportAction": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InViewportModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: InViewportModule,
            providers: [
                NgxInViewportService,
            ],
        };
    }
}
InViewportModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    WindowTokenModule,
                ],
                declarations: [
                    InViewportDirective,
                ],
                exports: [
                    InViewportDirective,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { InViewportModule, InViewportDirective as ɵd, NgxInViewportService as ɵe, WINDOW as ɵa, WindowTokenModule as ɵc, _window as ɵb };
//# sourceMappingURL=ngx-viewport.js.map

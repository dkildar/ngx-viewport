(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('ngx-viewport', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-viewport'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var WINDOW = new core.InjectionToken('WindowToken');
function _window() {
    return typeof window !== 'undefined' && window ? window : {};
}
var WindowTokenModule = (function () {
    function WindowTokenModule() {
    }
    return WindowTokenModule;
}());
WindowTokenModule.decorators = [
    { type: core.NgModule, args: [{
                providers: [{
                        provide: WINDOW,
                        useFactory: _window
                    }]
            },] },
];
var NgxInViewportService = (function () {
    function NgxInViewportService(window, document) {
        this.window = window;
        this.document = document;
        this.handlers = [];
    }
    NgxInViewportService.prototype.addDetectListener = function (element, inViewportHandler) {
        var _this = this;
        if (!this.window || !element || !inViewportHandler)
            return;
        var handler = {
            listener: function () { return _this.elementOnViewport(element, inViewportHandler); },
            element: element,
        };
        this.elementOnViewport(element, inViewportHandler);
        this.window.addEventListener('scroll', handler.listener);
        this.handlers.push(handler);
    };
    NgxInViewportService.prototype.removeDetectListener = function (element) {
        var handler = this.handlers.find(function (h) { return h.element === element; });
        this.window.removeEventListener('scroll', handler.listener);
    };
    NgxInViewportService.prototype.elementOnViewport = function (element, inViewportHandler) {
        if (this.isElementOnViewport(element))
            inViewportHandler();
    };
    NgxInViewportService.prototype.isElementOnViewport = function (element) {
        if (!this.window || !this.document)
            return;
        var clientRect = element.getBoundingClientRect();
        return !!clientRect &&
            clientRect.top <= this.document.body.clientHeight &&
            clientRect.left <= this.document.body.clientWidth &&
            clientRect.bottom >= 0 &&
            clientRect.right >= 0;
    };
    return NgxInViewportService;
}());
NgxInViewportService.decorators = [
    { type: core.Injectable },
];
NgxInViewportService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [WINDOW,] },] },
    { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] },] },
]; };
var InViewportDirective = (function () {
    function InViewportDirective(inViewportService, element) {
        this.inViewportService = inViewportService;
        this.element = element;
        this.inViewportAction = new core.EventEmitter();
    }
    InViewportDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.inViewportService
            .addDetectListener(this.element.nativeElement, function () { return _this.inViewportAction.emit(); });
    };
    InViewportDirective.prototype.ngOnDestroy = function () {
        this.inViewportService.removeDetectListener(this.element.nativeElement);
    };
    return InViewportDirective;
}());
InViewportDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[in-viewport]'
            },] },
];
InViewportDirective.ctorParameters = function () { return [
    { type: NgxInViewportService, },
    { type: core.ElementRef, },
]; };
InViewportDirective.propDecorators = {
    "inViewportAction": [{ type: core.Output },],
};
var InViewportModule = (function () {
    function InViewportModule() {
    }
    InViewportModule.forRoot = function () {
        return {
            ngModule: InViewportModule,
            providers: [
                NgxInViewportService,
            ],
        };
    };
    return InViewportModule;
}());
InViewportModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
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

exports.InViewportModule = InViewportModule;
exports.ɵd = InViewportDirective;
exports.ɵe = NgxInViewportService;
exports.ɵa = WINDOW;
exports.ɵc = WindowTokenModule;
exports.ɵb = _window;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-viewport.umd.js.map

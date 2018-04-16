import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { NgxInViewportService } from './ngx-in-viewport.service';
export declare class InViewportDirective implements AfterViewInit, OnDestroy {
    private inViewportService;
    private element;
    inViewportAction: EventEmitter<{}>;
    constructor(inViewportService: NgxInViewportService, element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}

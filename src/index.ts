import {NgModule, ModuleWithProviders} from '@angular/core';
import * as svgPanZoom from './lib/svg-pan-zoom';


@NgModule({
    declarations: [
        svgPanZoom
    ],
    exports: [
        svgPanZoom
    ]
})
export class NgSvgPanZoom {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgSvgPanZoom
        };
    }
}

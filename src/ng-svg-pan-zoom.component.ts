import {Component} from '@angular/core';
import * as svgPanZoom from './lib/svg-pan-zoom';
let svg = svgPanZoom;

@Component({
    selector: 'ng-svg-pan-zom',
    templateUrl: `template.html`
})
export class NgSvgPanZoomComponent {

    constructor() {
    }

    afterViewInit() {
        svg('#demo-tiger');
    }
}

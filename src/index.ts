import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgSvgPanZoomComponent } from './ng-svg-pan-zoom.component';

export * from './ng-svg-pan-zoom.component';

@NgModule({
  declarations: [
    NgSvgPanZoomComponent
  ],
  exports: [
    NgSvgPanZoomComponent
  ]
})
export class NgSvgPanZoom {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgSvgPanZoom
    };
  }
}

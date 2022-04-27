import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptBackgroundFetch } from '@demo/shared';
import { } from '@adilek/nativescript-background-fetch';

@Component({
	selector: 'demo-nativescript-background-fetch',
	templateUrl: 'nativescript-background-fetch.component.html',
})
export class NativescriptBackgroundFetchComponent {
  
  demoShared: DemoSharedNativescriptBackgroundFetch;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptBackgroundFetch();
  }

}
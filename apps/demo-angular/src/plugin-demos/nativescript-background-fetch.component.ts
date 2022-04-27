import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptBackgroundFetch } from '@demo/shared';
import { } from '@adilek/fetch-task';

@Component({
	selector: 'demo-fetch-task',
	templateUrl: 'fetch-task.component.html',
})
export class NativescriptBackgroundFetchComponent {
  
  demoShared: DemoSharedNativescriptBackgroundFetch;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptBackgroundFetch();
  }

}
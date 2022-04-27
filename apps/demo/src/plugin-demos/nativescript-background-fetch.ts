import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptBackgroundFetch } from '@demo/shared';
import {BackgroundFetch } from '@myscope/nativescript-background-fetch';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptBackgroundFetch {
	
	private _counter: number;
  private _message: string;
  private _fetchManager: BackgroundFetch;
  private _platform: any;

 

  get message(): string {
    return this._message;
  }
  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange("message", value)
    }
  }

  constructor() {
    super();

    BackgroundFetch.configure({
      minimumFetchInterval: 15,
      stopOnTerminate: false,
      startOnBoot: true,
      enableHeadless: true
    }, function() {
      console.log('[BackgroundFetch] Event Received!');
      this._counter++;
      this.updateMessage();
    	BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NEW_DATA);
    }.bind(this), function(error) {
    	console.log('[BackgroundFetch] FAILED');
    }.bind(this));

    // Initialize default values.
    this._counter = 0;
    this.updateMessage();
  }

  private updateMessage() {
    this.message = this._counter + " BackgroundFetch events received";
  }

  public onTap() {
    this._counter--;
    this.updateMessage();
  }
}

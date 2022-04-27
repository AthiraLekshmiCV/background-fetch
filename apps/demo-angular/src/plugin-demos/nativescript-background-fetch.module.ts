import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptBackgroundFetchComponent } from './nativescript-background-fetch.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptBackgroundFetchComponent }])],
  declarations: [NativescriptBackgroundFetchComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptBackgroundFetchModule {}

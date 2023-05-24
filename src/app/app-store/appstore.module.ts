import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.state';

export const metaReducers = [];

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot(appReducers, { metaReducers })],
  exports: [StoreModule],
})
export class AppStoreModule {}

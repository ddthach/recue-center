import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppStoreModule } from './app-store/appstore.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LayoutComponent } from './layout/layout.component';
import { PagesModule } from './pages/pages.module';
import routes from './routes';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: false }),

    LoadingBarHttpClientModule,
    ComponentsModule,
    PagesModule,
    AppStoreModule,
  ],
  exports: [RouterModule, LayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductModule, AppRoutingModule, UtilsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

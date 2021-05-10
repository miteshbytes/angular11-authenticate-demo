import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { IndexComponent } from './product/index/index.component';
import { CreateComponent } from './product/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../utility/token.interceptor';
import { ViewComponent } from './product/view/view.component';
import { EditComponent } from './product/edit/edit.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class ShopsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layouts/app/app.component';
import { HomeIndexComponent } from './views/home/index.component';
import { MineIndexComponent } from './views/mine/index.component';
import { MineNoticesComponent } from './views/mine/notices.component';
import { MineAppliesComponent } from './views/mine/applies.component';
import { MineApprovalsComponent } from './views/mine/approvals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeIndexComponent,
    MineIndexComponent,
    MineNoticesComponent,
    MineAppliesComponent,
    MineApprovalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

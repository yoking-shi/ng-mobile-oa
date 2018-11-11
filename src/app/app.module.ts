import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layouts/app/app.component';
import { HomeIndexComponent } from './views/home/index.component';
import { MineIndexComponent } from './views/mine/index.component';
import { MineNoticesComponent } from './views/mine/notices.component';
import { MineAppliesComponent } from './views/mine/applies.component';
import { MineApprovalsComponent } from './views/mine/approvals.component';
import { LoginIndexComponent } from './views/login/index.component';
import { AppsIndexComponent } from './views/apps/index.component';
import { AppliesIndexComponent } from './views/applies/index.component';
import { AppliesShowComponent } from './views/applies/show.component';
import { AppliesNewComponent } from './views/applies/new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeIndexComponent,
    MineIndexComponent,
    MineNoticesComponent,
    MineAppliesComponent,
    MineApprovalsComponent,
    LoginIndexComponent,
    AppsIndexComponent,
    AppliesIndexComponent,
    AppliesShowComponent,
    AppliesNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

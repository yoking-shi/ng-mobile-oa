import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { SplashIndexComponent } from './views/splash/index.component';


const routes: Routes = [
  { path: '', component: SplashIndexComponent },
  { path: 'login', component: LoginIndexComponent },
  { path: 'todo', component: HomeIndexComponent },
  { path: 'notices', component: MineNoticesComponent },
  { path: 'apps', component: AppsIndexComponent },
  { path: 'mine', component: MineIndexComponent },
  { path: 'mine/applies', component: MineAppliesComponent },
  { path: 'mine/approvals', component: MineApprovalsComponent },
  { path: 'apply', component: AppliesIndexComponent },
  { path: 'apply/:bussiness_id/new', component: AppliesNewComponent },
  { path: 'apply/:id', component: AppliesShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

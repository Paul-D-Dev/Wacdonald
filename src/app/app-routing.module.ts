import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './core/auth.guard';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'order' },
  { path: 'order', component: PagesComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ContentComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'login', component: LoginComponent },
  {path: "jumbotron", component: JumbotronComponent},
  {path: "bootstrap-form", component: BootstrapFormComponent},
  {path: "bootstrap-table", component: BootstrapTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchersComponent } from './matchers/matchers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchersComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent,
    BootstrapTableComponent,
    JumbotronComponent,
    BootstrapFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

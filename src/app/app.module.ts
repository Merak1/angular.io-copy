import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PresentComponent } from './present/present.component';
import { FirstInfoComponent } from './first-info/first-info.component';
import { SecondInfoComponent } from './second-info/second-info.component';
import { SpeedComponent } from './speed/speed.component';
import { ToolComponent } from './tool/tool.component';
import { LoveComponent } from './love/love.component';
import { StartedComponent } from './started/started.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PresentComponent,
    FirstInfoComponent,
    SecondInfoComponent,
    SpeedComponent,
    ToolComponent,
    LoveComponent,
    StartedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ControlsComponent } from './components/controls/controls.component';
import { DeviceComponent } from './components/device/device.component';
import { DevicesComponent } from './components/devices/devices.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScreenShareComponent } from './components/screen-share/screen-share.component';
import { SimpPeerComponent } from './components/simp-peer/simp-peer.component';
import { WebSocketComponent } from './components/web-socket/web-socket.component';
import { Global } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    ScreenShareComponent,
    SimpPeerComponent,
    WebSocketComponent,
    NavbarComponent,
    DevicesComponent,
    DeviceComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

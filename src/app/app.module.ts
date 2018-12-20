import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ScreenShareComponent } from './components/screen-share/screen-share.component';
import { SimpPeerComponent } from './components/simp-peer/simp-peer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { DeviceComponent } from './components/device/device.component';
import { TestComponent } from './components/test/test.component';
import { WebSocketComponent } from './components/web-socket/web-socket.component';
import { Global } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    ScreenShareComponent,
    SimpPeerComponent,
    DeviceComponent,
    TestComponent,
    WebSocketComponent
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

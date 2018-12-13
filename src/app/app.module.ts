import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SimpPeerComponent } from './components/simp-peer/simp-peer.component';
import { FindDeviceComponent } from './components/find-device/find-device.component';
import { HttpClientModule } from '@angular/common/http';
import { ScreenShareComponent } from './components/screen-share/screen-share.component';
import { ScreenComponent } from './components/screen/screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpPeerComponent,
    FindDeviceComponent,
    ScreenShareComponent,
    ScreenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

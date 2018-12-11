import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreenRecordComponent } from './components/screen-record/screen-record.component';
import { VideoRecordComponent } from './components/video-record/video-record.component';
import { Peer2peerComponent } from './components/peer2peer/peer2peer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScreenRecordComponent,
    VideoRecordComponent,
    Peer2peerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

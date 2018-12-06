import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreenRecordComponent } from './components/screen-record/screen-record.component';
import { VideoRecordComponent } from './components/video-record/video-record.component';
import { RealScreenRecorderComponent } from './components/real-screen-recorder/real-screen-recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenRecordComponent,
    VideoRecordComponent,
    RealScreenRecorderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

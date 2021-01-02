import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { TimerComponent } from './components/timer/timer.component';
import { StatsComponent } from './components/stats/stats.component';
import {WordsService} from './services/words.service';
import { ModalComponent } from './components/modal/modal.component';
import { RestartTestComponent } from './components/restart-test/restart-test.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    TimerComponent,
    StatsComponent,
    ModalComponent,
    RestartTestComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

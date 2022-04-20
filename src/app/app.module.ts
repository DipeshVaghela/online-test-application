import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TestWindowComponent } from './components/test-window/test-window.component';
import { QuestionComponent } from './components/question/question.component';
import { TestService } from './services/test.service';
import { FormsModule } from '@angular/forms';
import { TestResultComponent } from './components/test-result/test-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    TestWindowComponent,
    QuestionComponent,
    TestResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}

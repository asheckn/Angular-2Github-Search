import { NgModule, Directive }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { GithubComponent } from './components/github.component';
import {GithubService} from './services/github.service';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule ],
  declarations: [ AppComponent,
                  GithubComponent],
  bootstrap:    [ AppComponent ],
  providers:[GithubService,HttpModule]
})
export class AppModule { }

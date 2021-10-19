import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ChelneriComponent } from './chelneri/chelneri.component';
import { MeseComponent } from './mese/mese.component';
import { MancaruriComponent } from './mancaruri/mancaruri.component';
import { ContactComponent } from './contact/contact.component';
import { ClientiComponent } from './clienti/clienti.component';
import { StatsComponent } from './stats/stats.component';
import { ComenziComponent } from './comenzi/comenzi.component';
import { TermsComponent } from './terms/terms.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { PopupComponent } from './popup/popup.component';
import { ComenzimancareComponent } from './comenzimancare/comenzimancare.component';

@NgModule({
  declarations: [
    AppComponent,
    ChelneriComponent,
    MeseComponent,
    MancaruriComponent,
    ContactComponent,
    ClientiComponent,
    StatsComponent,
    ComenziComponent,
    TermsComponent,
    SearchComponent,
    HeaderComponent,
    ResultsComponent,
    PopupComponent,
    ComenzimancareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

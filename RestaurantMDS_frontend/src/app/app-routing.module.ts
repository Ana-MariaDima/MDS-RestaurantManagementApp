import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChelneriComponent } from './chelneri/chelneri.component';
import { ClientiComponent } from './clienti/clienti.component';
import { ComenziComponent } from './comenzi/comenzi.component';
import { ComenzimancareComponent } from './comenzimancare/comenzimancare.component';
import { ContactComponent } from './contact/contact.component';
import { MancaruriComponent } from './mancaruri/mancaruri.component';
import { MeseComponent } from './mese/mese.component';
import { StatsComponent } from './stats/stats.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', redirectTo: '/comenzi', pathMatch: 'full' },
  {path:"comenzi",component:ComenziComponent},
  {path:"terms",component:TermsComponent},
  {path:"comenzimancare",component:ComenzimancareComponent},
  {path:"mese",component:MeseComponent},
  {path:"chelneri",component:ChelneriComponent},
  {path:"clienti",component:ClientiComponent},
  {path:"stats",component:StatsComponent},
  {path:"contact",component:ContactComponent},
  {path:"mancaruri",component:MancaruriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

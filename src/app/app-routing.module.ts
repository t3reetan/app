import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AliceVibePageComponent } from './alice-vibe-page/alice-vibe-page.component';

import { LandingComponent } from './auth/landing/landing.component';
import { BobVibePageComponent } from './bob-vibe-page/bob-vibe-page.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { NameFriendInputPageComponent } from './name-friend-input-page/name-friend-input-page.component';
import { NameInputPageComponent } from './name-input-page/name-input-page.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'loading', component: LoadingPageComponent },
  { path: 'name-input', component: NameInputPageComponent },
  { path: 'name-friend-input', component: NameFriendInputPageComponent },
  { path: 'alice-vibe', component: AliceVibePageComponent },
  { path: 'bob-vibe', component: BobVibePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

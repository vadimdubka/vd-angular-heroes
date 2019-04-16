import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';

/*You'll configure the router with Routes in the RouterModule.
* Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
* A typical Angular Route has two properties:
  - path: a string that matches the URL in the browser address bar.
  - component: the component that the router should create when navigating to this route.
*/

/*localhost:4200/heroes
* localhost:4200/dashboard*/
const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent}];


/*Exporting RouterModule makes router directives available for use in the AppModule components that will need them*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}

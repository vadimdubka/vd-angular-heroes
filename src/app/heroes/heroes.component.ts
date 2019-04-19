import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

/*Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data.
* They should focus on presenting data and delegate data access to a service.
* Removing data access from components means you can change your mind about the implementation anytime, without touching any components.*/
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  // Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
    this.getHeroesArr();
  }

  getHeroesArr(): void {
    this.heroService.getHeroesArr().subscribe(heroes => this.heroes = heroes);
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    /*When the given name is non-blank, the handler creates a Hero-like object from the name (it's only missing the id) and passes it to the services addHero() method.
    * When addHero saves successfully, the subscribe callback receives the new hero and pushes it into to the heroes list for display.*/
    this.heroService.addHero({name} as Hero)
        .subscribe(hero => this.heroes.push(hero));
  }

  public delete(hero: Hero): void {
    /*Although the component delegates hero deletion to the HeroService, it remains responsible for updating its own list of heroes. */
    this.heroes = this.heroes.filter(h => h !== hero);
    /*There's really nothing for the component to do with the Observable returned by heroService.delete(). It must subscribe anyway.
    * If you neglect to subscribe(), the service will not send the delete request to the server! As a rule, an Observable does nothing until something subscribes!*/
    this.heroService.deleteHero(hero).subscribe();
  }
}

import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

/*Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data.
* They should focus on presenting data and delegate data access to a service.
* Removing data access from components means you can change your mind about the implementation anytime, without touching any components.*/
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // property selectedHero of type Hero
  vdHero: Hero = {
    id: 1,
    name: 'Vadim'
  };
  selectedHero: Hero;
  heroes = HEROES;

  constructor() {
  }

  // Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}

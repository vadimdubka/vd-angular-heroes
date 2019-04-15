import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

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

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

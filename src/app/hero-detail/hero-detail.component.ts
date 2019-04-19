import {Location} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  /* - The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent.
  This component is interested in the route's bag of parameters extracted from the URL.
  The "id" parameter is the id of the hero to display.
    - The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.
    - The location is an Angular service for interacting with the browser. */
  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  ngOnInit() {
    this.getHeroFromRoute();
  }

  getHeroFromRoute(): void {
    // The route.snapshot is a static image of the route information shortly after the component was created.
    // Route parameters are always strings. The JavaScript (+) operator converts the string to a number.
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }
  }

  /*Navigates backward one step in the browser's history stack using the Location service*/
  public goBack(): void {
    this.location.back();
  }
}

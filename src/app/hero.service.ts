import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  // asynchronous approach
  getHeroesArr(): Observable<Hero[]> {
    this.messageService.add('HeroService: fecthed heroes');
    return of(HEROES);
  }
}

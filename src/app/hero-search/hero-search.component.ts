import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(term: string): void {
    this.searchTerms.next(term); //observable stream
    //  notifica todos os observadores sobre a mudança no termo de pesquisa
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(), //se o termo repetir ele ignora
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
//  O switchMap cancela e descarta observáveis anteriores sempre que um novo termo de pesquisa é digitado, garantindo que apenas os resultados da pesquisa mais recente sejam exibidos.

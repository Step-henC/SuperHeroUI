import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-heroes',
  templateUrl: './edit-heroes.component.html',
  styleUrls: ['./edit-heroes.component.css']
})
export class EditHeroesComponent implements OnInit {
ngOnInit(): void {
}
@Input() hero?: SuperHero;
@Output() heroesUpdated = new EventEmitter<SuperHero[]>(); //need output to make page refresh after an event

constructor(private superHeroService: SuperHeroService) {}

updateHero(hero:SuperHero){
this.superHeroService.updateSuperHeroes(hero)
.subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes))
}
deleteHero(hero:SuperHero){
  this.superHeroService.deleteSuperHero(hero)
.subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes))
}
createHero(hero:SuperHero){
  this.superHeroService.createSuperHero(hero)
  .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes))
}
}

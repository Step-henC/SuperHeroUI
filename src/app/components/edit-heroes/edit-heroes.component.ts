import { Component, OnInit, Input } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';

@Component({
  selector: 'app-edit-heroes',
  templateUrl: './edit-heroes.component.html',
  styleUrls: ['./edit-heroes.component.css']
})
export class EditHeroesComponent implements OnInit {
ngOnInit(): void {
}
@Input() hero?: SuperHero;

updateHero(hero:SuperHero){

}
deleteHero(hero:SuperHero){
  
}
}

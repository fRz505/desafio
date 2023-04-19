import { Component, OnDestroy, VERSION } from '@angular/core';
import { RickandmortyService } from './rickandmorty.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  
  name = 'Angular' + VERSION.major;
  character$: Subscription;
  character: any;
  characterO$: Observable<any>;
 
  constructor(private rickAndMortyService: RickandmortyService) {
    this.characterO$ = this.rickAndMortyService.getCharacter(2);

    this.character$ = this.rickAndMortyService.getCharacter(1).pipe(
      map ((x: any)=> {
        
        return {name: x.name, image:x.image}
      })
    ).subscribe (
      (character: any) => {
        this.character = character
      } 
     );      
  }
  ngOnDestroy() {
    this.character$.unsubscribe();
  }

}

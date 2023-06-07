import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() new: Character = {
    name: '',
    power: 0
  }

/* para no añadir nada a menos que el campo requerido esté relleno */


  add(){
    if ( this.new.name.trim().length === 0 ) {
      return;//salte de este metodo=nohagas nada
    }

    console.log(this.new)

    this.new = {
      name: '',
      power: 0
    }
    
  };
}



import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Noa';
  public gender: 'female'|'male'|'Prefer not to say' = 'female';
  public invitationMap = {
    female: 'invitarla',
    male: 'invitarlo'
  }

  changeClient():void {
    this.name = 'Miles';
    this.gender = 'male';
  }

  // i18nPlural
  public clients: string[] = ['Natalia', 'Miri', 'Cris', 'Gilles', 'Granada', 'Graciela', 'Inma', 'Carmen', 'Geraldine', 'Antea'];
  public clientsMap = {
    '=0': "we don't have any clients waiting in the queue.", 
    '=1': "we have a client waiting in the queue.", 
    'other': "we have # clients waiting in the queue.", 
  }

  deleteClient(): void{
    this.clients.shift();
  }

}

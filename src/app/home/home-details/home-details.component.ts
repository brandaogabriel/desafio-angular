import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.sass']
})
export class HomeDetailsComponent {

  @Input() items: any[];
  @Input() customerList: boolean;
  @Input() contactList: boolean;


  constructor() { }

}

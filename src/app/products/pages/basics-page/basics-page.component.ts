import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'ruben';
  public nameUpper: string = 'RUBEN';
  public fullName: string = 'rUbEn PEereGrINa';

  public customDate: Date = new Date();

}

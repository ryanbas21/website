import { Component } from '@angular/core';


@Component({
  selector: 'index-title',
  template: `<h1 class='center'>Brain Day State Service</h1>`,
  styles: [`
    .center {
      font-family: Arial;
      color: FFAC37;
      display: flex;
      justify-content: center;
    }`]
})
export class TitleComponent {}

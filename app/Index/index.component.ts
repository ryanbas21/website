import { Component } from '@angular/core';
import { IndexContainer } from './index-container.component';
import { TitleComponent } from './title.component'
@Component({
  selector: `index`,
  template: `
  <div>
  <h1>Index</h1>
  <index-title></index-title>
  <index-container class='center' > </index-container>
  </div>`,
  styles: [`
    .center {
      display: flex;
      align-items: center;
      justify-content: center;
    }`
  ],
  providers: []
})
export class IndexComponent {}

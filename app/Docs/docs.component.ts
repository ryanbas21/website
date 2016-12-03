import { Component } from '@angular/core';
import { DocsBox } from './docs-box.component';
@Component({
  selector: `docs`,
  template: `
  <div class='container'>
  <h1 class = 'left'>Docs</h1>
    <docs-box class='flex-center'></docs-box>
  </div>`,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      background-color: #76C8FF;
    }
    .flex-center {
      width: 800px;

    }
    .left {
      display: flex;
      justify-content:  space-evenly;
      margin-right: 200px;
    }`
  ],
})
export class DocsComponent {

}

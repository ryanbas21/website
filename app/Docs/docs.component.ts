import { Component } from '@angular/core';
import { DocsBox } from './docs-box.component';
@Component({
  selector: `docs`,
  template: `
  <div>
  <h1>Docs</h1>
    <docs-box class='flex-center'></docs-box>
  </div>`,
  styles: [`
    .flex-center {
      display: flex;
      justify-content: center;
    }`],
})
export class DocsComponent {

}

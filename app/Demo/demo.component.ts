import { Component } from '@angular/core';
import { AppComponent2 } from './app/app.component';
import { StoreService } from './app/store.service';
@Component ({
  selector: 'demo',
  template: `
  <div>
  <tic-tac-toe></tic-tac-toe>
  </div>`,
  styles: [``],
  providers: [ StoreService ]
})
export class DemoComponent{}

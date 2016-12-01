import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <nav>
    <a routerLink="/" routerLinkActive="active">Home</a>
    <a routerLink="/docs" routerLinkActive="active">Docs</a>
    <a routerLink="demos" routerLinkActive="active">Demos</a>
  </nav>
  <router-outlet></router-outlet>
`
})
export class AppComponent { }

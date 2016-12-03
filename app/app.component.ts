import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <nav>
  <div class="nav-wrapper">
     <a href="#" class="brand-logo">Logo</a>
      <div id="nav-mobile" class="right hide-on-med-and-down">
       <a routerLink="/" routerLinkActive="active">Home</a>
       <a routerLink="/docs" routerLinkActive="active">Docs</a>
       <a routerLink="demos" routerLinkActive="active">Demos</a>
     </div>
   </div>
  </nav>
  <router-outlet></router-outlet>
`,
styles: [`
  li {
    list-style: none;
  }
  .nav-wrapper {
    display: inline-block;

  }`]
})
export class AppComponent { }

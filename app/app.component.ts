import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <nav>
  <div class="nav-wrapper">
     <a href="#" class="brand-logo">Logo</a>
     <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li><a routerLink="/" routerLinkActive="active">Home</a></li>
       <li><a routerLink="/docs" routerLinkActive="active">Docs</a></li>
       <li><a routerLink="demos" routerLinkActive="active">Demos</a></li>
     </ul>
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

import { Component } from '@angular/core';

@Component({
  selector: 'docs-box',
  template: `
  <h1>API Reference </h1>
  <article>
    <ul>
      <li>
        <h4>addReducer(reducer: Function): void</h4>
        <div class='method'>Adds reducers to be run on state on invokation of dispatch.</div>
      </li>
      <li>
      <h4> getState() </h4>
      <div class='method'>Object Returns a deep clone of state.</div>
      </li>
      <li>
        <h4>dispatch(action: Object): Object </h4>
        <div class='method'>Takes in action objects and checks for lock related commands before running state through reducers.</div>
      </li>
      <li>
        <h4>subscribe(fn: Function): Function </h4>
        <div class='method'>Subscribes a listener function to state changes and returns a function to unsubscribe the same listener function.</div>
      </li>
    </ul>
    </article>
  `,
  styles: [`
    h1 {
      font-family: Veranda, Fantasy;
    }
    li {
      font-family: Veranda;
      list-style: none;
      margin-top: 0px;
      margin-bottom: 10px;
    }
    .method {
      font-weight: bolder;
      color: #036DB2;
      font-family: Arial;
      padding-left: 50px;
      font-size: .8em;

    }
  `]
})
export class DocsBox {}

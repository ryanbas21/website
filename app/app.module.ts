import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { IndexComponent } from './Index/index.component';
import { DocsComponent } from './Docs/docs.component';
import { DemoComponent } from './Demo/demo.component';
import { NotFoundComponent } from './PageNotFound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { DocsBox } from './Docs/docs-box.component'
import { IndexContainer } from './Index/index-container.component';
import { TitleComponent } from './Index/title.component';
const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'demos', component: DemoComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, IndexComponent, DocsComponent, DemoComponent, NotFoundComponent, DocsBox, IndexContainer, TitleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

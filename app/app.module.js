"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var index_component_1 = require("./Index/index.component");
var docs_component_1 = require("./Docs/docs.component");
var demo_component_1 = require("./Demo/demo.component");
var notfound_component_1 = require("./PageNotFound/notfound.component");
var router_1 = require("@angular/router");
var docs_box_component_1 = require("./Docs/docs-box.component");
var appRoutes = [
    { path: '', component: index_component_1.IndexComponent },
    { path: 'docs', component: docs_component_1.DocsComponent },
    { path: 'demos', component: demo_component_1.DemoComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [app_component_1.AppComponent, index_component_1.IndexComponent, docs_component_1.DocsComponent, demo_component_1.DemoComponent, notfound_component_1.NotFoundComponent, docs_box_component_1.DocsBox],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
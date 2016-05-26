import {Component} from '@angular/core';
import {RegionComponent} from './regions/region.component';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <sel-region> loading test </sel-region>
    `,
    directives: [RegionComponent],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent { }

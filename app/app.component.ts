import {Component} from '@angular/core';
import {RegionComponent} from './regions/region.component';
import {ItemComponent} from './EveItems/item.component';
//import {HTTP_PROVIDERS} from '@angular/http';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import 'rxjs/Rx';
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <nav>
        <a (click)="menuitem('region')">Region</a>
        <a (click)="menuitem('items')">Items</a>
    </nav>
    <div id="region">
        <sel-region> loading test </sel-region>
    </div>
    <div id="items">
        <sel-items> loading items </sel-items>
    </div>
    `,
    directives: [RegionComponent,ItemComponent],
  //  providers: [HTTP_PROVIDERS]
})

export class AppComponent {
    public region: string = 'hidden';
    
    public menuitem = function(itm: string){
        switch(itm){
            case 'region': {
                /*this.region = 'visible';
                this.items = 'hidden';*/
                document.getElementById('items').hidden = true;
            }
            break;
            case 'items': {
                this.region = 'hidden';
                this.items = 'visible';
                document.getElementById('region').hidden = true;
                 document.getElementById('items').hidden = false;
            }
            break;
        }
    }
    
    
 }

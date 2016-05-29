import {Component} from '@angular/core';
import {RegionComponent} from './regions/region.component';
import {ItemComponent} from './EveItems/item.component';
import {PriceBoardComponent} from './PriceBoard/priceboard.component';
//import {testComponent} from './PriceBoard/test.component';
//import {HTTP_PROVIDERS} from '@angular/http';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import 'rxjs/Rx';
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <nav>
        <a (click)="menuitem('region')">Region</a>
        <a (click)="menuitem('items')">Items</a>
        <a (click)="menuitem('tpb')">test Price Board</a>
        <a (click)="menuitem('pb')">Price Board</a>
    </nav>
    <div id="region">
        <sel-region> loading test </sel-region>
    </div>
    <div id="items">
        <sel-items> loading items </sel-items>
    </div>
    <div id="tpb">
        <sel-testboard> loading canvas </sel-testboard>
    </div>
    <div id="pb">
        <sel-pb> loading canvas </sel-pb>
    </div>
    `,
    styleUrls: ['app/app.css', 'app/assets/bootstrap/dist/css/bootstrap.min.css'],
    directives: [RegionComponent, ItemComponent, PriceBoardComponent],
  //  providers: [HTTP_PROVIDERS]
})

export class AppComponent {
    public region: string = 'hidden';
    
    public menuitem = function(itm: string){
                document.getElementById('items').hidden = true;
                document.getElementById('pb').hidden = true;
                document.getElementById('tpb').hidden = true;
                document.getElementById('region').hidden = true;
        switch(itm){
            case 'region': {
                /*this.region = 'visible';
                this.items = 'hidden';*/
                document.getElementById('region').hidden = false;
            }
            break;
            case 'items': {
                 document.getElementById('items').hidden = false;
            }
            break;
            case 'pb': {
                 document.getElementById('pb').hidden = false;
            }
            break;
            case 'tpb': {
                 document.getElementById('tpb').hidden = false;
            }
            break;
        }
    }
    
    
 }

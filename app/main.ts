import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
//import {RegionComponent} from './region.component';
import { HTTP_PROVIDERS  } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import 'rxjs/add/operator/map';
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
//bootstrap(RegionComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
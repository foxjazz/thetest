import {Injectable} from '@angular/core';
import {  Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ItemTypes} from '../EveItems/ItemTypes';

@Injectable()
export class TestService {
    private uri = 'https://crest-tq.eveonline.com/regions/';
    private uriSys: string = '';
    public loading: boolean;
    constructor(private http: Http) { }

   public getPriceData(regionid: string, typehref: string): Observable<ItemTypes> {
        this.uri = "https://crest-tq.eveonline.com/market/" + regionid + "/orders/sell/?type=" + typehref;
        return  this.http.get(this.uri)
            .map((res: Response) => res.json());
   }
    //https://crest-tq.eveonline.com/market/10000002/orders/sell/?type=https://crest-tq.eveonline.com/types/34/
}
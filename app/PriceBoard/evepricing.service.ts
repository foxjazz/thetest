import {Injectable} from '@angular/core';
import {  Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ItemTypes} from '../EveItems/ItemTypes';

@Injectable()
export class PricingService {
    private uri = 'https://crest-tq.eveonline.com/regions/';
    public loading: boolean;
    public e: Array<Object>;
    result: Object;
    constructor(private http: Http, uri: string) { }
    public getPriceData(regionid: string, typehref: string): Observable<ItemTypes> {
        this.uri = "https://crest-tq.eveonline.com/market/" + regionid + "/orders/sell/?type=" + typehref;
        return  this.http.get(this.uri)
            .map((res: Response) => res.json());

       /* let newresult: Observable<ItemTypesA> = new Observable<ItemTypesA>();
        let i: number = 0;
        
        return newresult;*/
    }
   /* getSystems(id: string): Observable<ISystems> {
        this.uriSys = 'https://crest-tq.eveonline.com/market/' + id + '/orders/sell/?type=https://crest-tq.eveonline.com/types/34/';
        return this.http.get(this.uriSys)
            .map((res: Response) => res.json());

    }*/
    //https://crest-tq.eveonline.com/market/10000002/orders/sell/?type=https://crest-tq.eveonline.com/types/34/
}
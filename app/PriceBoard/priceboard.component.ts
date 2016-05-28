import {Component, OnInit} from '@angular/core';
import {ItemTypes, ItemType, ItemTypeDescriptor} from '../EveItems/ItemTypes';
import {ISystemShort, ISystemShortDescriptor} from '../Regions/IRegions';
import {TypeValidator} from '../Assets/typescript-dotnet/source/System/TypeValidator';
import {PricingService} from './evepricing.service';
//import 'rxjs/Rx';
//import {Observable} from 'rxjs/Observable';

@Component ({
  selector: 'sel-board',
  templateUrl: 'app/PriceBoard/priceboard.component.html',
  //styleUrls: ['app/PriceBoard/canvas.css'],
  providers: [PricingService]
})

export class PriceBoardComponent implements OnInit{
    public selSystems: ISystemShort;
    public selEveItems: Array<ItemType>;
    public resItems: Array<ItemType>;
    constructor(private evePriceService: PricingService) { }
    
    private getDataAndStart = function(){
        
        let res: string;
         let restry = JSON.parse(localStorage.getItem('Systems'));
         let first = false;
         first = restry.length && restry[0];
        const isd = new TypeValidator<ISystemShort[]>([ISystemShortDescriptor]);
        if(first) {
            if(isd.isSubsetOf(restry)) {
              this.selSystems = restry;
            };
        }
          res = localStorage.getItem('SelEveItems');
         restry = JSON.parse(res);
         if(restry != null)
            first = restry.length && restry[0];
         const isdt = new TypeValidator<ItemType[]>([ItemTypeDescriptor]);
          if (first) {
            if(isdt.isSubsetOf(restry)) {
              this.selItemTypes = restry;
            }
            else {
                return;
            }
          }
          else {
              return;
            }
          
          //Populate pricing data here
         
         // this.DoAllSelections = Observable.interval(30000);
    };
    
    private DoAllSelections = function(){
       let isys = 0;
          let iitem = 0;
          for(isys = 0; isys < this.selSystems.length; isys++) {
            for(iitem = 0; iitem < this.selEveItems; iitem++) {
              this.getPriceData(this.selSystems[isys].region, this.selEveItems[iitem].type.name);
            }
          }
    }
    private getPriceData = function(region: string, itemhref: string){
       this.evePriceService.getPriceData(region, itemhref).subscribe( (res5: ItemTypes) => {
                this.resItems =  res5.items;
            });
    };
    ngOnInit() {
      //this.resItems = new Array<ItemType>();
      //this.getDataAndStart();
    }
}
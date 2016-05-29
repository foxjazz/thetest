import {Component, OnInit} from '@angular/core';
import {ItemTypes, ItemType, ItemTypeDescriptor} from '../EveItems/ItemTypes';
import {PriceTypes, items} from './pricetypes';
import {ISystemShort, ISystemShortDescriptor} from '../Regions/IRegions';
import {TypeValidator} from '../Assets/typescript-dotnet/source/System/TypeValidator';
import {EvePricingService} from './evepricing.service';
import 'rxjs/Rx';
@Component({
  selector: 'sel-pb',
  templateUrl: 'app/PriceBoard/priceboard.component.html',
  //styleUrls: ['app/PriceBoard/canvas.css'],
  providers: [EvePricingService]
})
export class PriceBoardComponent implements OnInit {
  public selSystems: Array<ISystemShort>;
  public selEveItems: Array<ItemType>;
  public resItems: Array<items>;
  constructor (private evePricingService: EvePricingService){}
  ngOnInit() {
     
     this.selSystems = new Array<ISystemShort>();
    let restry = JSON.parse(localStorage.getItem('Systems'));
    let first = false;
    first = restry.length && restry[0];
    const isd = new TypeValidator<ISystemShort[]>([ISystemShortDescriptor]);
    if (first && isd.isSubsetOf(restry)) {
      this.selSystems = restry;
    } else {
      return;
    }
    restry = JSON.parse(localStorage.getItem('SelEveItems'));
    if (restry != null)
      first = restry.length && restry[0];
    const isdt = new TypeValidator<ItemType[]>([ItemTypeDescriptor]);
    if (first && isdt.isSubsetOf(restry)) {
      this.selEveItems = restry;
    } else {
      this.selEveItems = restry;
    }
    this.DoAllSelections();
  }
  refreshData(){
    this.DoAllSelections();
  }
  private callPriceData(regionid: string, itemhref: string) {
       this.evePricingService.getPriceData(regionid, itemhref).subscribe( res => {
                this.resItems =  res.items;
                console.log(this.resItems);
            },
            err => console.log('Something went wrong:' + err.message));
    }
  private DoAllSelections(){
       let isys = 0;
          let iitem = 0;
          for (isys = 0; isys < this.selSystems.length; isys++) {
            for (iitem = 0; iitem < this.selEveItems.length; iitem++) {
              this.callPriceData(this.selSystems[isys].regionid, this.selEveItems[iitem].type.href);
            }
          }
    }
    
}
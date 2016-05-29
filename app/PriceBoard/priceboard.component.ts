import {Component, OnInit} from '@angular/core';
import {ItemTypes, ItemType, ItemTypeDescriptor} from '../EveItems/ItemTypes';
import {ISystemShort, ISystemShortDescriptor} from '../Regions/IRegions';
import {TypeValidator} from '../Assets/typescript-dotnet/source/System/TypeValidator';
import {TestService} from './Test.service';
import 'rxjs/Rx';
@Component({
  selector: 'sel-testboard',
  templateUrl: 'app/PriceBoard/priceboard.component.html',
  //styleUrls: ['app/PriceBoard/canvas.css'],
  providers: [TestService]
})
export class PriceBoardComponent implements OnInit {
  public selSystems: Array<ISystemShort>;
  public selEveItems: Array<ItemType>;
  public resItems: Array<ItemType>;
  
  ngOnInit() {
     this.resItems = new Array<ItemType>();
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
      return;
    }
    this.DoAllSelections();
  }
  private DoAllSelections = function(){
       let isys = 0;
          let iitem = 0;
          for (isys = 0; isys < this.selSystems.length; isys++) {
            for (iitem = 0; iitem < this.selEveItems; iitem++) {
              this.getPriceData(this.selSystems[isys].region, this.selEveItems[iitem].type.name);
            }
          }
    }
    private getPriceData = function(region: string, itemhref: string): void{
      
       this.evePriceService.getPriceData(region, itemhref).subscribe( (res5: ItemTypes) => {
                this.resItems =  res5.items;
                console.log(this.resItems);
            });
    };
}
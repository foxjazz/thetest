import {Component,OnInit} from '@angular/core';
import {ItemTypesService} from './ItemTypes.service';
import {ItemType, ItemTypeDescriptor} from './ItemTypes';
import {TypeValidator} from '../Assets/typescript-dotnet/source/System/TypeValidator';

@Component ({
  selector: 'sel-items',
  templateUrl: 'app/EveItems/item.component.html',
  styleUrls: ['app/app.css', 'app/assets/bootstrap/dist/css/bootstrap.min.css'],
  providers: [ItemTypesService]
})
export class ItemComponent implements OnInit{
    public allItemTypes: Array<ItemType>;
    public selItemTypes: Array<ItemType>;
    constructor(private eveTypeService: ItemTypesService) { this.selItemTypes = new Array<ItemType>();}
    
    public onClearItems(){
        this.selItemTypes = new Array<ItemType>();
    }
    
    private getTypes = function () {
        let res: string;
        this.allItemTypes = this.eveTypeService.getItemTypes();
         res = localStorage.getItem('SelEveItems');
         let restry = JSON.parse(res);
         let first = false;
         if(restry != null)
            first = restry.length && restry[0];
         const isd = new TypeValidator<ItemType[]>([ItemTypeDescriptor]);
        if (first) {
            if(isd.isSubsetOf(restry)) {
              this.selItemTypes = restry;
            }
            else {
                this.selItemTypes = new Array<ItemType>();    
            }
        }
        else {  
            this.selItemTypes = new Array<ItemType>(); 
            } 
    }
    
    public onRemoveItem = function( item: ItemType){
        this.tempItem = this.selItemTypes;
        this.selItemTypes = new Array<ItemType>();
        let i = 0;
        for (i = 0; i < this.tempItem.length; i++) {
          if (item === this.tempItem[i]) {
            continue;
          }
          this.selItemTypes.push(this.tempItem[i]);
        }
    }
    public onSelectItem = function (it: ItemType) {
        
        let i = 0;
        for (i = 0; i < this.selItemTypes.length; i++) {
            if (it === this.selItemTypes[i]) {
                return;
            }
        }
        this.selItemTypes.push(it);
        localStorage.setItem('SelEveItems', JSON.stringify(this.selItemTypes));
    }
    ngOnInit() {
        this.getTypes();
    }
}
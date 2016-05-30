import {Component,OnInit} from '@angular/core';
import {ItemTypesService} from './ItemTypes.service';
import {ItemType, ItemTypeDescriptor} from './ItemTypes';

@Component ({
  selector: 'sel-items',
  templateUrl: 'app/EveItems/item.component.html',
  styleUrls: ['app/app.css', 'app/Assets/bootstrap/dist/css/bootstrap.min.css'],
  providers: [ItemTypesService]
})
export class ItemComponent implements OnInit{
    public allItemTypes: Array<ItemType>;
    public selItemTypes: Array<ItemType>;
    constructor(private eveTypeService: ItemTypesService) { this.selItemTypes = new Array<ItemType>();}
    
    public onClearItems(){
        this.selItemTypes = new Array<ItemType>();
    }
    onGetTypes() { this.getTypes(); }
    private getTypes = function () {
        let res: string;
        this.allItemTypes = this.eveTypeService.getItemTypes();
         res = localStorage.getItem('SelEveItems');
         if(res != null && res.indexOf('marketGroup') > 0)
         {
             let restry = JSON.parse(res);
             this.selItemTypes = restry;
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
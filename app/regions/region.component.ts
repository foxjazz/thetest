import { Component, OnInit} from '@angular/core';
import {Region, ISystem} from './IRegions';
import { HTTPEveService } from './http-eve.service';
import {HTTP_PROVIDERS} from '@angular/http';
//import {localStorage} from '../Utilities/localStorageModule';
import 'rxjs/Rx';

//import {Regions} from './mock2-Regions';
// remember to run tsd install package to definitely type these.
// package.json has the dependency list


@Component({
    selector: 'sel-region',
    templateUrl: 'app/regions/region.component.html',
    styleUrls: ['app/app.css', 'app/assets/bootstrap/dist/css/bootstrap.min.css'],
    providers: [HTTPEveService, HTTP_PROVIDERS]
})

//[provide('localStorage', {useValue: window.localStorage})]

export class RegionComponent implements OnInit {
    public title: string = 'Regions List';
    private errorMessage: string = '';
    public Regs: Array<Region>;
    private loaded = false;
    public avSystems: Array<ISystem>;
    private selRegion: Region;
    private tempSys: Array<ISystem>;
    public selSystems: Array<ISystem>;
      constructor(private eveService: HTTPEveService) { }
      
      private dupe = function(sys: Array<ISystem>): Array<ISystem>
      {
        let res: Array<ISystem>;
        res = new Array<ISystem>();
        let flag = false;
          for ( let i = 0; i < sys.length; i++ ) {
            if (res == null){
              res.push(sys[i])
              i++;
            }
            for (let i1 = 0; i1 < res.length; i1++) {
              if(sys[i].location.name === res[i1].location.name) {
                flag = true;
              }
            }
            if (!flag){
               res.push(sys[i]);
            }
          }
        return res;
      };
      public onRemoveStation(system: ISystem)
      {
        this.tempSys = this.selSystems;
        this.selSystems = new Array<ISystem>();
        let i = 0;
        for (i = 0; i < this.tempSys.length; i++) {
          if (system === this.tempSys[i]) {
            continue;
          }
          this.selSystems.push(this.tempSys[i]);
        }
      }
    public onSelectStation(system: ISystem){
      if(this.selSystems == null){
        this.selSystems = new Array<ISystem>();
      }
      let i = 0;
        for (i = 0; i < this.selSystems.length; i++) {
          if (system === this.selSystems[i]) {
            return;
          }
        }
        this.selSystems.push(system);
        //JSON.stringify(this.selSystems);
       /* let data: Array<ISystem>;
        data = JSON.parse(JSON.stringify(this.selSystems));*/
        localStorage.setItem('Systems', JSON.stringify(this.selSystems));
    }
    
      public onSelectRegion(region: Region) {
        this.selRegion = region;
        this.eveService.getSystems(this.selRegion.id_str).subscribe(res => {
          this.avSystems = this.dupe(res.items);
        });
      }

     getRegions(){
        let res: string;
         let data: Array<ISystem>;
         res = localStorage.getItem('Systems');
         // first I  need to know if data is compantible with res
        // data = JSON.parse(res);
         
         this.eveService.getRegions().subscribe(res => {
                this.Regs =  res.items.filter(function(el: Region): boolean{
                  if(isNaN(+el.name.slice(-1)))
                  {
                   return true;
                  }
                });
                if (this.Regs.length > 0){
                  this.loaded = true;
                }
                
            });
        
     }

     ngOnInit() {
    this.getRegions();
  }
}


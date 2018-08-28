import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import { infoServes } from '../Informacion/obtenerInfo.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  databloque :any ={};
  dataprecio :any ={};
  datatrans :any ={};
  datatama :any ={};
  
  constructor(private info:  infoServes) { }

  ngOnInit() {
  
    this.info.getinfobloque().subscribe(res => {
      this.databloque = res;
    });
    this.info.getinfoprecio().subscribe(res => {
      this.dataprecio = res;
    });
    this.info.getinfotama().subscribe(res => {
      this.datatama = res;
    });
    this.info.getinfotrans().subscribe(res => {
      this.datatrans = res;
    });  }

}

import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import { infoServes } from '../Informacion/obtenerInfo.service'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data :any ={};
   constructor(private info:  infoServes) { }

  ngOnInit() {
  
    this.info.getinfoEstadistico().subscribe(res => {
      this.data = res;
    });
  }
 

}

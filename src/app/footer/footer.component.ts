import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import { infoServes } from '../Informacion/obtenerInfo.service'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data :any ={};
   constructor(private info:  infoServes) { }

    // Doughnut
  public doughnutChartLabels:string[] = ['F2Pool', 'Bixin', 'Unknown','SlushPool','ViaBTC','AntPool','BTC.com','Bitcoin.com','BTC.TOP','BTCC Pool'];
  public doughnutChartData:number[] = [0,0,0,0,0,0,0,0,0,0];
  public doughnutChartType:string = 'doughnut';
 
  ngOnInit() {
  
    this.info.getinfoGrafico().subscribe(res => {
      this.data = res;
      this.doughnutChartData=[res.F2Pool,res.Bixin,res.Unknown,res.SlushPool,res.ViaBTC,res.AntPool,res['BTC.com'],res['Bitcoin.com'],res['BTC.TOP'],res['BTCC Pool']]
      
    });
  }
  
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { infoServes } from './Informacion/obtenerInfo.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,MainComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,HttpModule,ChartsModule
  ],
  providers: [infoServes],
  bootstrap: [AppComponent]
})
export class AppModule { }

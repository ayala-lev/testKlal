import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ScreanComponent } from "./components/screan/screan.component";
import { TableTasksComponent } from "./components/table-tasks/table-tasks.component";



@NgModule({
    declarations: [
    AppComponent,
    ScreanComponent,
    TableTasksComponent
   ], 
    
    entryComponents: 
    [],
    
    imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,],
    bootstrap: [AppComponent]
})
export class AppModule {

}
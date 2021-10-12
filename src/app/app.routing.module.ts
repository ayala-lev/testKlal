import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ScreanComponent } from './components/screan/screan.component';



const APP_ROUTES: Route[] = [
    { path: "**", component: ScreanComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}


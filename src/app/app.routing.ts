import { RouterModule, Routes } from "@angular/router";
// import { NewformComponent } from "./newform/newform.component";
import { SubcompComponent } from "./subcomp/subcomp.component";
const Route: Routes = [
    {
        path : '', loadChildren : ()=> import("./newform/new-item.module").then((m)=> m.NewItem) ,
    },
    {
        path : '', redirectTo  : 'all' , pathMatch: 'full'
    }
];
export const routing = RouterModule.forRoot(Route);
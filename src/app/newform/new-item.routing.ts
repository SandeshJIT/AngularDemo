import { Routes,RouterModule } from "@angular/router";
import { NewformComponent } from "./newform.component";
const route: Routes = [
    {
        path:"form",component : NewformComponent
    }
]
export const newRoute = RouterModule.forChild(route); 
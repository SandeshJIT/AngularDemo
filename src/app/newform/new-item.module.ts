import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NewformComponent } from "./newform.component";
import { newRoute } from "./new-item.routing";
@NgModule({
    imports : [CommonModule,ReactiveFormsModule, newRoute],
    declarations :[ NewformComponent ]
})
export class NewItem{

}
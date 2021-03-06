import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from "./vehicle-routing.module";
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleService } from './vehicle.service';
import { SharedModule } from "../shared/shared.module";
import { VehicleActions } from "app/store/actions";

@NgModule({
  providers:[ 
    VehicleService,
    VehicleActions
     ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    VehicleRoutingModule
  ],
  declarations: [ VehicleComponent, VehicleListComponent ],
  exports: [ VehicleListComponent]
})
export class VehicleModule { }

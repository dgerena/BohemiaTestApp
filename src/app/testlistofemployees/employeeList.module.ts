import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employeeList.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeeComponent],
  exports: [EmployeeComponent]
})
export class EmployeeListModule { }

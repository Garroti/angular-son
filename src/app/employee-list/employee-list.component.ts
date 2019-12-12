import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // @ts-ignore
  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent

  constructor(public employeeService: EmployeeService) {
    setTimeout(() => {
      this.employeeNewModal.show()
    }, 2000)
  }

  ngOnInit() {
  }



  // getSalaryColor(employee){
  //   return {'salary-expensive': employee.salary > 20000, 'salary-cheap': employee.salary < 1000}
  //   // return employee.salary > 20000 ? 'green' : null
  // }

}

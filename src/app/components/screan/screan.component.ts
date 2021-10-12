import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { Employee } from 'src/app/models/employee.model';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-screan',
  templateUrl: './screan.component.html',
  styleUrls: ['./screan.component.css']
})
export class ScreanComponent implements OnInit {

  employees : Employee[];
  department: Department[];
  parents : Department[];
 
  @Output()
  onSelectEmp: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _empService : EmployeeService, private _depService: DepartmentService) 
  { 
      
  }
  changeEmp(value){
    this.onSelectEmp.emit(value);
  }
  getDepartmentsParents(){
    debugger;
    this.department.forEach((e) => 
    {if (e.ParentID == 0)
    {
      this.parents.push(e);
    }});
  }

  ngOnInit() {
    this._empService.getEmployees().subscribe((emps) => {
      this.employees = emps;
    });
    this._depService.getDepartments().subscribe((deps) => { 
      this.department = deps;
      console.log(this.department);
      this.department.forEach((e) => 
    {
      if (e.ParentID == 0)
    {
      this.parents.push(e);
    }});
    });
    
  }

}

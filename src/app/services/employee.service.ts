import { Injectable } from '@angular/core';
import { Employee } from '../layout/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {
      id : 1,
      name : 'jacob',
      email : 'jacon@com.in',
      phone : 987
    },
    {
      id : 2,
      name : 'Ray',
      email : 'ray@com.in',
      phone : 654
    }
  ];
  
  constructor() { }

  onGet(){
    return this.employees;
  }

}

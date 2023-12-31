import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.scss']
})
export class BootstrapTableComponent implements OnInit {

  employees: Employee[] = [
    {id: 1, name: "E 001", description: "E 001 des", email: "e001@email.com"},
    {id: 2, name: "E 002", description: "E 002 des", email: "e002@email.com"},
    {id: 3, name: "E 003", description: "E 003 des", email: "e003@email.com"},
    {id: 4, name: "E 004", description: "E 004 des", email: "e004@email.com"}
  ];
  selectedEmployee: Employee | null  = null;

  constructor() { }

  ngOnInit() {
  }

  public createEmployee(e:Employee){
    this.employees.push(e);
  }

  public selectEmployee(e: Employee){
    this.selectedEmployee = e;
  }

}

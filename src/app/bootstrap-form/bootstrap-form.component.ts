import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.scss']
})
export class BootstrapFormComponent implements OnInit {

  employee : Employee = {id: null, name: "", description: "", email: ""};

  contact = {
    email: '' // Add other properties as needed
  };


  constructor() { }

  ngOnInit() {
  }

  createEmployee(){
    console.log("Employee created: ", this.employee, this.contact);
    this.employee = {id: null, name: "", description: "", email: ""};

  }

}

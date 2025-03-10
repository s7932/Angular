import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, name: "a",email:"a@gmail.com",address:"pune",phone:"1234567890" },
    { id: 2, name: "b",email:"b@gmail.com",address:"mumbai",phone:"1234567890" },
    { id: 3, name: "c",email:"c@gmail.com",address:"nagpur",phone:"1234567890" },
    ];

}

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
    editStudent(student:Student){
        console.log(student);
    }
    deleteStudent(student:Student){ 
        console.log(student);
        let indexToDelete = this.students.indexOf(student);
        this.students.splice(indexToDelete,1);
    }
}

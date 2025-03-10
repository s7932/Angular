import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, name: "a",email:"a@gmail.com",address:"pune",phone:"1234567890",active:false,leaveDate:new Date() },
    { id: 2, name: "b",email:"b@gmail.com",address:"mumbai",phone:"1234567890", active:true },
    { id: 3, name: "c",email:"c@gmail.com",address:"nagpur",phone:"1234567890", active:false,leaveDate:new Date() },
    ];
    selectedStudent?: Student;
    editStudent(selectedStudent: Student){
      this.selectedStudent=selectedStudent
    }
  
    addStudent(){
      this.selectedStudent= new Student(-1,"","","","");
    }
    deleteStudent(student:Student){ 
        console.log(student);
        let indexToDelete = this.students.indexOf(student);
        this.students.splice(indexToDelete,1);
    }
    saveStdtInList(student:Student){
      if(student.id==-1){
        student.id=this.students.length+1;
        this.students.push(student);
      }
      else{
        let indexToUpdate = this.students.indexOf(student);
        this.students[indexToUpdate]=student;
      }
      this.selectedStudent=undefined;
    }
}

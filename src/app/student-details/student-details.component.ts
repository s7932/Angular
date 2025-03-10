import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  @Input()
  student?: Student;

  @Output() 
  onSaveStudent: EventEmitter<Student> = new EventEmitter<Student>(); 

  saveStudent() {
    this.onSaveStudent.emit(this.student)
  }
}

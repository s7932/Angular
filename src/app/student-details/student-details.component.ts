import { Component, Input } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  @Input()
  student?: Student;
}

export class Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  active?: boolean;
  leaveDate?: Date;
  marksAvg?:number
  
  constructor(id: number, name: string, email: string, phone: string, address: string,active?: boolean, leaveDate?: Date, marksAvg?:number
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.active = active;
    this.leaveDate = leaveDate;
    this.marksAvg = marksAvg
  }
}
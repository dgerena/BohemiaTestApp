import { Component } from '@angular/core';
@Component({
  selector: 'employeeList',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class EmployeeComponent {
  title = 'Team';
  show = true;
  employees = [
    {
      name:'Mary Smith',
      title:'Software Developer',
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuidhjcKxpv3nA_pEQlcRkJV1q5fBWweTTWIKw1EGwxBNdpWGN1Q"
    },
    {
      name:'John Doe',
      title:'Software Tester',
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuidhjcKxpv3nA_pEQlcRkJV1q5fBWweTTWIKw1EGwxBNdpWGN1Q"
    }
  ];
}

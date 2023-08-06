import { Component, ElementRef } from '@angular/core';

// @Component({
//   selector: 'app-component-one',
//   template: ``,
//   styles: [ ``]
// })

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent {
  divColor = 'red';

  number = 1;

  constructor(){
    /* Ternary Operator : Simple way to handle the output based on the condition. */
    this.number == 1 ? console.log("One") : console.log("not One");
  }

  /*ngStyle */
  zoneSafeStatus = true;
  zoneBorderStatus = true;
  zonemaxWidth = false;

  /*ngClass */
  employeeStatus = true;

  /*ngIf */
  customerEligibility = false;

  /* Local reference */
  myAnswer = '';
  btnClick(question: HTMLParagraphElement) {
    if (question.innerText == 'Hey !! How are you doing?') {
      this.myAnswer = ' I am Excellent....';
    }
  }

  /*   *ngFor   */
  customerExperience = [
    'He Likes the Non Veg Food',
    'He dislike in Reception the way they talk in Restaurent',
    'He went with his 4 freinds',
  ];

  customersList = [
    { name: 'John Smith', location: 'London', Job: 'Sales Rep' },
    { name: 'Robert Frost', location: 'New yark', Job: 'Hotel Chef' },
    { name: 'Peter moore', location: 'Colombo', Job: 'Car Driver' },
  ];



  /*ngSwitch and case*/
  customerID = 10;






}

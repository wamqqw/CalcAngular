import { Component } from '@angular/core';

export interface Btn {
  text:string,
  color:string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  inputValue!: string;
  buttons: Btn[] = [
    { text: '1', color: 'primary' },
    { text: '2', color: 'primary' },
    { text: '3', color: 'primary' },
    { text: '4', color: 'primary' },
    { text: '5', color: 'primary' },
    { text: '6', color: 'primary' },
    { text: '7', color: 'primary' },
    { text: '8', color: 'primary' },
    { text: '9', color: 'primary' },
    { text: '0', color: 'primary' },
    { text: '+', color: 'primary' },
    { text: '-', color: 'primary' },
    { text: '*', color: 'primary' },
    { text: '/', color: 'primary' },
    { text: '=', color: 'primary' }
  ];
}

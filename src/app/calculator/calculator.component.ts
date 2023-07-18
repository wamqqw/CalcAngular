import { Component } from '@angular/core';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';

export interface Tile {
  cols:number;
  rows:number;
  text?:string,
  type:string;
  click?:any;
  color?:string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  total: any = 0;
  operator = null;
  waitForSecondNumber = false;
  firstOperand: any = null;
  inputValue!: string;
  buttons: Tile[] = [
    {cols: 4, rows: 1, type:'field'},
    { text: 'AC',cols: 1, rows:1, type: 'button', click: 'clear', color: 'primary' },
    { text: '+',cols: 1, rows:1, type: 'button', click: 'operator', color: 'primary' },
    { text: '%',cols: 1, rows:1, type: 'button', click: 'clear', color: 'primary' },
    { text: '-',cols: 1, rows:1, type: 'button', click: 'operator', color: 'primary' },
    
    { text: '7',cols: 1, rows:1, type: 'button', click: 'number', color: 'primary' },
    { text: '8',cols: 1, rows:1, type: 'button', click: 'number', color: 'primary' },
    { text: '9',cols: 1, rows:1, type: 'button', click: 'number', color: 'primary' },
    { text: '*',cols: 1, rows:1, type: 'button', click: 'operator', color: 'primary' },
    
    { text: '6',cols: 1, rows:1, type: 'button', click: 'number', color: 'primary' },
    { text: '5',cols: 1, rows:1, type: 'button', click: 'number', color: 'primary' },
    { text: '4',cols: 1, rows:1, type: 'button', click: 'number', color: 'primary' },
    { text: '/',cols: 1, rows:1, type: 'button', click: 'operator', color: 'primary' },
    
    { text: '3',cols: 1, rows:1, type: 'button', click: 'number', color: 'primary' },
    { text: '2',cols: 1, rows:1, type: 'button', click: 'number', color: 'primary' },
    { text: '1',cols: 1, rows:1, type: 'button', click: 'number', color: 'primary' },
    { text: '=',cols: 1, rows:1, type: 'button', click: 'operator', color: 'primary' },

    { text: '0',cols: 2, rows:1, type: 'button', click: 'number', color: 'primary' },
    { text: '<-',cols: 2, rows:1, type: 'button', click: 'operator', color: 'primary' },
    { text: '.',cols: 1, rows:1, type: 'button', click: 'decimal', color: 'primary' },
  ];
  eventClick(event: string, param:any = null){
    switch(event) {
      case "number":
        if (this.waitForSecondNumber) {
          this.total = param
          this.waitForSecondNumber = false;
        }
        else {
          this.total = (this.total === 0) ? Number(param) : Number('' + this.total+param)
        }
        break;
      case "operator":
        this.operator = param;
        if (this.firstOperand === null) {
          this.firstOperand = Number(this.total)
        }
        else if(this.operator) {
          const result = this.doCalculation(this.operator, Number(this.total))
          this.total = String(result);
          this.firstOperand = result
        }
        this.waitForSecondNumber = true;
        break;
      case "clear":
        this.total = 0;
        this.firstOperand = null
        this.operator = null
        this.waitForSecondNumber = false
        break;
      case "decimal":
        if (!this.total.includes('.')) this.total += '.';
        break;
    }
  }

  private doCalculation(operator: string,secondNumber: any) {
    switch(operator) {
      case '+':
        return this.firstOperand +=secondNumber
      case '-':
        return this.firstOperand -=secondNumber
      case '*':
        return this.firstOperand *=secondNumber
      case '/':
        return this.firstOperand /=secondNumber  
      case '=':
        return secondNumber
    }
  }

}

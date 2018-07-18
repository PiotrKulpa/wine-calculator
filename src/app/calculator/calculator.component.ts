import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [FruitsService]
})
export class CalculatorComponent implements OnInit {

  constructor(private fruitsService: FruitsService) { }

  fruit: any = [];
  acid: number;
  suggar: number;


  ngOnInit() {
    this.fruit = this.fruitsService.fruits;
  }

  //TODO napisz input select automatycznie, w zaleznosci od wyboru ustaw zawartosc kwasu i cukru w owocach
  calcIngredients() {

  }

}

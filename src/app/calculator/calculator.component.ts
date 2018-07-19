import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [FruitsService]
})
export class CalculatorComponent implements OnInit {

  constructor(private fruitsService: FruitsService) { }

  fruit: any = [];
  id: number;
  acid: number;
  suggar: number;


  ngOnInit() {
    this.fruit = this.fruitsService.fruits;
  }

  //TODO napisz input select automatycznie, w zaleznosci od wyboru ustaw zawartosc kwasu i cukru w owocach
  onSelect(e) {
    this.id = e.target.value;
    this.acid = this.fruit[this.id].acid;
    this.suggar = this.fruit[this.id].suggar;
    console.log(this.acid, this.suggar)
  }

  calcIngredients(form: NgForm) {
    console.log(form.value)//dostep po nazwie name
  }

}

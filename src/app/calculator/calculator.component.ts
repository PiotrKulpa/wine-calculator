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
  fruitsL: number;
  wine: number;
  addSuggar: number;
  addWater: number;


  ngOnInit() {
    this.fruit = this.fruitsService.fruits;
  }


  onSelect(e) {
    this.id = e.target.value;
    this.acid = this.fruit[this.id].acid;
    this.suggar = this.fruit[this.id].suggar;
    console.log(this.acid, this.suggar)
  }

  calcIngredients(form: NgForm) {
    //nastaw
    this.wine = (this.acid / 8) * form.value.grape;
    console.log(this.wine);
    //cukier dla 10% wina
    //TODO dodaj listę wyboru z procentem wina (zaimportuj obiekt z serwisu)
    this.addSuggar = 172 * this.wine - (form.value.grape * this.suggar);
    console.log(this.addSuggar);
    //TODO oblicz ilośc wody (172 x nastaw - addSuggar) / 1,6
    this.addWater = (172 * this.wine - this.addSuggar) / 1,6
      console.log(this.addWater);
  }

}

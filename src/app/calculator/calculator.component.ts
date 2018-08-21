import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';
import { NgForm } from '@angular/forms';

//TODO napisz validator min
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [FruitsService]
})
export class CalculatorComponent implements OnInit {

  constructor(private fruitsService: FruitsService) { }

  fruit: any = [];
  alcohol: any = [];
  id: number;
  idAlk: number;
  acid: number;
  suggar: number;
  suggarInFruit: number;
  fruitsL: number;
  wine: number;
  addSuggar: number;
  addAcid: number;
  calculatedWater: number;
  addWater: number;


  ngOnInit() {
    this.fruit = this.fruitsService.fruits;
    this.alcohol = this.fruitsService.alcohol;
  }


  onSelect(e) {
    this.id = e.target.value;
    this.acid = this.fruit[this.id].acid;
    this.suggar = this.fruit[this.id].suggar;
  }

  onSelectAlk(e) {
    this.idAlk = e.target.value;
    this.suggarInFruit = this.alcohol[this.idAlk].suggar;
  }

  calcIngredients(form: NgForm) {
    //nastaw
    if (this.acid > 8) {
      this.addAcid = 0;
      this.wine = (this.acid / 8) * form.value.grape;

      this.addSuggar = this.suggarInFruit * this.wine - (form.value.grape * this.suggar);
      this.addSuggar = this.addSuggar / 1000;

      this.calculatedWater = this.wine - form.value.grape;
      this.addWater = this.calculatedWater - this.addSuggar / 1.6;
    } else if (this.acid === 8) {
      this.addAcid = 0;
      this.wine = (this.acid / 8) * form.value.grape;

      this.addSuggar = this.suggarInFruit * this.wine - (form.value.grape * this.suggar);
      this.addSuggar = this.addSuggar / 1000;

      this.addWater = 0;
    } else {
      this.addAcid = 8 - this.acid;
      this.wine = form.value.grape;

      this.addSuggar = this.suggarInFruit * this.wine - (form.value.grape * this.suggar);
      this.addSuggar = this.addSuggar / 1000;

      this.addWater = 0;
    }
  }

}

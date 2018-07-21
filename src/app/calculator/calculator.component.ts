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
  alcohol: any = [];
  id: number;
  idAlk: number;
  acid: number;
  suggar: number;
  suggarInFruit: number;
  fruitsL: number;
  wine: number;
  addSuggar: number;
  calculatedWater: number;
  addWater: number;


  ngOnInit() {
    this.fruit = this.fruitsService.fruits;
    this.alcohol = this.fruitsService.alcohol;
    console.log(this.alcohol)
  }


  onSelect(e) {
    this.id = e.target.value;
    this.acid = this.fruit[this.id].acid;
    this.suggar = this.fruit[this.id].suggar;
    console.log(this.acid, this.suggar)
  }

  onSelectAlk(e) {
    this.idAlk = e.target.value;
    this.suggarInFruit = this.alcohol[this.idAlk].suggar;
    console.log(this.suggarInFruit);
  }

  calcIngredients(form: NgForm) {
    //nastaw
    this.wine = (this.acid / 8) * form.value.grape;
    console.log(`cały nastaw to: ${this.wine}l`);

    //TODO dodaj listę wyboru z procentem wina (zaimportuj obiekt z serwisu)

    this.addSuggar = 206 * this.wine - (form.value.grape * this.suggar);
    this.addSuggar = this.addSuggar / 1000;
    console.log(`potrzebny cukier to: ${this.addSuggar}g`);

    this.calculatedWater = this.wine - form.value.grape;
    console.log(this.calculatedWater)
    this.addWater = this.calculatedWater - this.addSuggar / 1.6;
    console.log(`objętośc potrzebnej wody to: ${this.addWater}l`);
  }

}

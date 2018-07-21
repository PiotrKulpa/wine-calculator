import { Component, ViewEncapsulation } from '@angular/core';

export class FruitsService {
  title = 'app';

  fruits = [
    {id: 1, name: "gooseberry", acid: 19, suggar: 70},
    {id: 2, name: "black berry", acid: 10, suggar: 55},
    {id: 3, name: "red bilberry", acid: 21, suggar: 70},
    {id: 4, name: "sweet cherries", acid: 4, suggar: 120},
    {id: 5, name: "pears", acid: 3, suggar: 100},
    {id: 6, name: "apples", acid: 10, suggar: 100},
    {id: 7, name: "strawberries", acid: 10, suggar: 45},
    {id: 8, name: "blackberries", acid: 11, suggar: 60},
    {id: 9, name: "raspberries", acid: 15, suggar: 100},
    {id: 10, name: "white currants", acid: 24, suggar: 70},
    {id: 11, name: "red currants", acid: 24, suggar: 60},
    {id: 12, name: "black currants", acid: 30, suggar: 85},
    {id: 13, name: "cherries", acid: 13, suggar: 100},
    {id: 14, name: "grapes", acid: 8, suggar: 155}
  ];

  alcohol = [
    {id: 1, percent: 10, suggar: 172},
    {id: 2, percent: 11, suggar: 189},
    {id: 3, percent: 12, suggar: 206},
    {id: 4, percent: 13, suggar: 223},
    {id: 5, percent: 14, suggar: 241},
    {id: 6, percent: 15, suggar: 258},
    {id: 7, percent: 16, suggar: 275},
    {id: 8, percent: 17, suggar: 292},
    {id: 9, percent: 18, suggar: 309}
  ];
}

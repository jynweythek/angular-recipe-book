import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @ViewChild(ShoppingEditComponent) nameInput: ShoppingEditComponent;
  @ViewChild(ShoppingEditComponent) amountInput: ShoppingEditComponent;

  @Output() ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}

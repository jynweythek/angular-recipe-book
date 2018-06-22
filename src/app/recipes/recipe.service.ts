import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Shnitzel',
      'This is simply a test recipe',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/11/10/0/ce1a19_pork_schnitzel.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Test Recipe 2', 'This is simply a test recipe 2',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/09/frying-pan-pizza.jpg',
      [
        new Ingredient('Buns', 3),
        new Ingredient('Meat', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addSeveralIngredients(ingredients);
  }

}

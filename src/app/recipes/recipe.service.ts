import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
        new Recipe('Recipe',
         'Recipe is description',
          'https://cdn.pixabay.com/photo/2020/08/31/12/15/meal-5532302_1280.jpg',
          [
              new Ingredient('Beat', 5),
              new Ingredient('Bread', 2),
          ]
          ),
        new Recipe('new Recipe',
         'Test is description',
          'https://cdn.pixabay.com/photo/2020/08/31/12/15/meal-5532302_1280.jpg',
          [
              new Ingredient('water', 1),
              new Ingredient('cake', 5),
          ]),
      ]; 

      constructor(private slService: ShoppingListService) {

      }

      getRecipe() {
         return this.recipes.slice();
      }
      getRecipes(index: number) {
          return this.recipes[index];
      }
      

      addToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredient(ingredients);
      }


}


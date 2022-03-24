import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';



export class ShoppingListService{
    startedEdited = new Subject<number>();
private  ingredients: Ingredient[] = [
        new Ingredient("Apple", 10),
        new Ingredient("Apple", 10)
      ];


getIngredients() {
   return this.ingredients;
}

getIngredient(index: number) {
    return this.ingredients[index];
}


addIngredients(ingredinet: Ingredient) {
    this.ingredients.push(ingredinet);
}

addIngredient(ingredient: Ingredient[]) {
this.ingredients.push(...ingredient);
}

upDataIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
}

deleteIngredient(index: number) {
this.ingredients.splice(index, 1);
}





}
import { RecipeService } from './../recipe.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipe()
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
 

}

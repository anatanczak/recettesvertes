import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipes.service';
import Recipe from './recipeInterface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Array<Recipe> = [];

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.recipes;
  }
}

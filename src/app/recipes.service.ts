import { Injectable } from '@angular/core';
import Recipe from './recipes/recipeInterface';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipes: Array<Recipe> = [
    {
      title: 'Recipe 1',
      image: 'thumbnail Img',
      shortDescription: 'Lorem ipsum dolorem sit emet.',
    },
    {
      title: 'Recipe 2',
      image: 'thumbnail Img',
      shortDescription: 'Lorem ipsum dolorem sit emet.',
    },
    {
      title: 'Recipe 3',
      image: 'thumbnail Img',
      shortDescription: 'Lorem ipsum dolorem sit emet.',
    },
  ];

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}

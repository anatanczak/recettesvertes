import { Component } from '@angular/core';
import RecipeThumbnail from './recipes/recipeInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recettesvertes';

  recipeThumbnails: Array<RecipeThumbnail> = [
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

  onRecipeAdded() {
    const newRecipe: RecipeThumbnail = {
      title: 'New Recipe',
      image: 'image',
      shortDescription: 'Lorem ipsum dolorem sit amet.',
    };

    this.recipeThumbnails.push(newRecipe);
  }
}

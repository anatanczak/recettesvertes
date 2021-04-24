import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RecipeService } from '../recipes.service';
import Recipe from '../recipes/recipeInterface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @ViewChild('recipeTitle') title: ElementRef;
  @ViewChild('RecipeShortDescription') shortDescription: ElementRef;

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {}

  onAddRecipe() {
    const newRecipe: Recipe = {
      title: this.title.nativeElement.value,
      image: 'image',
      shortDescription: this.shortDescription.nativeElement.value,
    };
    this.recipesService.addRecipe(newRecipe);
  }
}

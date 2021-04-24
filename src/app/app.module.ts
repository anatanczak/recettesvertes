import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeThumbnailComponent } from './recipes/recipe-thumbnail/recipe-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RecipesComponent,
    RecipeThumbnailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

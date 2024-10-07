import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipePageComponent } from './add-recipe-page/add-recipe-page.component';
import { SeePublishedRecipesPageComponent } from './see-published-recipes-page/see-published-recipes-page.component';
import { ActionsPageComponent } from './actions-page/actions-page.component';

const routes: Routes = [
  {path: '', component: AddRecipePageComponent},
  {path: 'seePublisheRecipes', component: SeePublishedRecipesPageComponent},
  {path: 'seeInformationRecipe', component: ActionsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

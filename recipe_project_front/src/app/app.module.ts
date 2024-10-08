import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddRecipePageComponent } from './add-recipe-page/add-recipe-page.component';
import { InformationMainComponent } from './information-main/information-main.component';
import { ProcessComponent } from './process/process.component';
import { SeePublishedRecipesPageComponent } from './see-published-recipes-page/see-published-recipes-page.component';
import { CardsRecipesPublishedComponent } from './cards-recipes-published/cards-recipes-published.component';
import { ActionsPageComponent } from './actions-page/actions-page.component';
import { FormsModule } from '@angular/forms';
import { SeeInformationRecipeComponent } from './see-information-recipe/see-information-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddRecipePageComponent,
    InformationMainComponent,
    ProcessComponent,
    SeePublishedRecipesPageComponent,
    CardsRecipesPublishedComponent,
    ActionsPageComponent,
    SeeInformationRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

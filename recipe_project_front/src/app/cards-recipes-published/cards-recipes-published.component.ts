import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-recipes-published',
  templateUrl: './cards-recipes-published.component.html',
  styleUrl: './cards-recipes-published.component.css'
})
export class CardsRecipesPublishedComponent {
  @Input() titleRecipe: string = ''

}

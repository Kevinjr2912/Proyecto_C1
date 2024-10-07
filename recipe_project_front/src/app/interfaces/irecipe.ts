import { IIngredient } from "./iingredient";
import { ITypeDifficulty } from "./itype-difficulty";

export interface IRecipe {
    name_recipe: string,
    description: string,
    preparation: string,
    time_duration: string,
    difficulty: ITypeDifficulty,
    ingredients: IIngredient[]
}

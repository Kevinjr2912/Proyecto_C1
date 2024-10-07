import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInformationSpecificRecipe } from '../interfaces/iinformation-specific-recipe';

@Injectable({
  providedIn: 'root'
})
export class ApiRecipeService {

  private urlAPI = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) { }

  public getinformationRecipe(): Observable<IInformationSpecificRecipe> {
    return this.http.post<IInformationSpecificRecipe>(`${this.urlAPI}/getRecipe/1`, {}); 
  }

  public updateInformationRecipe(id: number, dataToUpdate: {}): Observable<any> {
    return this.http.put<any>(`${this.urlAPI}/updateRecipe/${id}`, dataToUpdate);
  }
}

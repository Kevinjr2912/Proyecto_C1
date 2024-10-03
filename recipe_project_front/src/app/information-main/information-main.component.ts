import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-main',
  templateUrl: './information-main.component.html',
  styleUrl: './information-main.component.css'
})
export class InformationMainComponent {
  @Input() titleAction: string  = ''
  @Input() placeholder: String = ''
}

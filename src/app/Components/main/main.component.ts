import { Component } from '@angular/core';
import { FormacionComponent } from '../formacion/formacion.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormacionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}

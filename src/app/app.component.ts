import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './Components/aside/aside.component';
import { MainComponent } from './Components/main/main.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsideComponent,
    MainComponent,
    SkillsComponent,
    ExperienciaComponent,
    ProyectosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio-v2';
}

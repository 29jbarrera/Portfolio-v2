import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AsideComponent } from './Components/aside/aside.component';
import { MainComponent } from './Components/main/main.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';

import { FormacionComponent } from './Components/formacion/formacion.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CursosCarouselComponent } from './Components/cursos-carousel/cursos-carousel.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsideComponent,
    MainComponent,
    SkillsComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent,
    FormacionComponent,
    CursosCarouselComponent,
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'Javier Barrera';

  constructor(public translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'es';
    this.translate.use(savedLang);
  }
  get currentLang() {
    return this.translate.getCurrentLang();
  }

  changeLang(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}

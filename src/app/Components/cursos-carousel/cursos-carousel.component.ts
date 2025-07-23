import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-cursos-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos-carousel.component.html',
  styleUrl: './cursos-carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CursosCarouselComponent {
  courses = [
    {
      title: 'Angular de Cero a Experto',
      img: 'assets/cursos/Angular_Udemy_JBL.webp',
      plataforma: 'Udemy',
    },
    {
      title: 'Legacy - Node: De cero a experto',
      img: 'assets/cursos/Node_Udemy_JBL.webp',
      plataforma: 'Udemy',
    },
    {
      title: 'VSCode: Mejora tu velocidad para codificar',
      img: 'assets/cursos/VSCODE_Udemy_JBL.webp',
      plataforma: 'Udemy',
    },
  ];
  current = 0;

  next() {
    this.current = (this.current + 1) % this.courses.length;
  }

  prev() {
    this.current =
      (this.current - 1 + this.courses.length) % this.courses.length;
  }
}

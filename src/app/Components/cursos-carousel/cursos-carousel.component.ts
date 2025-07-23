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
      title: 'Angular Profesional',
      img: 'assets/cursos/Angular_Udemy_JBL.png',
      plataforma: 'Udemy',
    },
    {
      title: 'NestJS Backend',
      img: 'assets/cursos/Angular_Udemy_JBL.png',
      plataforma: 'Udemy',
    },
    {
      title: 'Docker desde cero',
      img: 'assets/cursos/Angular_Udemy_JBL.png',
      plataforma: 'Udemy',
    },
    {
      title: 'Fundamentos de TypeScript',
      img: 'assets/cursos/Angular_Udemy_JBL.png',
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

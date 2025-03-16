import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(
              `.nav-link[href="#${id}"]`
            );
            if (activeLink) activeLink.classList.add('active');
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
  }
}
